import React, { useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";
import Hero from "../components/home/Hero";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Button } from "../components/ui/Button";
import Search from "../components/home/Search";

const LandingPage = () => {
  const [products, setProducts] = useState([]);
  // const [searchedProducts, setSearchedProducts] = useState([]);
  const [query, setQuery] = useState("");
  const searchedProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(query)
  );

  // const [ratedProducts, setRatedProducts] = useState([])
  const [loading, setLoading] = useState(false);
  const [fetchComplete, setFetchComplete] = useState(false);

  useEffect(() => {
    async function fetchProducts(params) {
      setLoading(true);
      try {
        console.log("Fetching products...");
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);

        data.forEach((product) => {
          console.log(product.category);
        });
        setProducts(data);

        setLoading(false);
        setFetchComplete(true);
        return data;
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
        setFetchComplete(true);
      }
    }

    fetchProducts();
  }, []);

  console.log(products);
  console.log(query);

  return (
    <div className="">
      <Hero />
      <div className="pt-12 p-8 dark:bg-[#333]">
        <div id="products" className="scroll-mt-28">
          <div className="flex pb-3 items-center justify-center">
            <Search
              onSearch={(query) => {
                console.log(query);
                setQuery(query.toLowerCase());
              }}
            />
          </div>
          {query && products.length > 0 && (
            <div className="pb-8">
              <h3 className="mb-3 font-integral_bold text-center py-4">
                Search Results
              </h3>
              <ProductCard allProducts={searchedProducts} />
            </div>
          )}
        </div>
        <h3 className="text-xl sm:text-2xl font-integral_bold text-center py-4">
          Products Category
        </h3>
        {loading ? (
          <div className="custom-loader my-20 mx-auto"></div>
        ) : fetchComplete && products.length === 0 ? (
          <p className="text-center">
            No products found. Please check your network connection and try
            again
          </p>
        ) : (
          <div className="flex flex-col justify-center gap-6 py-6">
            <Tabs selectedTabClassName="border-b-2 border-blue-500">
              <TabList className="p-2 sm:p-4 mb-4 flex items-center justify-between w-full lg:w-[70%] lg:mx-auto text-[14px] md:text-xl font-semibold shadow-md">
                <Tab className="outline-none cursor-pointer">Men</Tab>
                <Tab className="outline-none cursor-pointer">Women</Tab>
                <Tab className="outline-none cursor-pointer">Jewelry</Tab>
                <Tab className="outline-none cursor-pointer">Electronics</Tab>
                <Tab className=" outline-none cursor-pointer hidden sm:block">
                  Top Rated
                </Tab>
              </TabList>

              <TabPanel>
                <div>
                  <h3 className="mb-3 scroll-mt-24 text-xl font-integral_bold text-center py-4">
                    Men&apos;s Products
                  </h3>
                  <ProductCard
                    allProducts={products.filter(
                      (prod) => prod.category === "men's clothing"
                    )}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <h3 className="mb-3 scroll-mt-24 text-xl font-integral_bold text-center py-4">
                    Women&apos;s Products
                  </h3>
                  <ProductCard
                    allProducts={products.filter(
                      (prod) => prod.category === "women's clothing"
                    )}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <h3 className="mb-3 scroll-mt-24 text-xl font-integral_bold text-center py-4">
                    Jewelries
                  </h3>
                  <ProductCard
                    allProducts={products.filter(
                      (prod) => prod.category === "jewelery"
                    )}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <h3 className="mb-3 scroll-mt-24 text-xl font-integral_bold text-center py-4">
                    Electronics
                  </h3>
                  <ProductCard
                    allProducts={products.filter(
                      (prod) => prod.category === "electronics"
                    )}
                  />
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <h3 className="mb-3 scroll-mt-24 text-xl font-integral_bold text-center py-4">
                    Rated Products
                  </h3>
                  <ProductCard
                    allProducts={products.filter(
                      (prod) => prod.rating.rate > 4.5
                    )}
                  />
                </div>
              </TabPanel>
            </Tabs>

            <Button className="block mx-auto w-40 mt-4 dark:text-black dark:bg-white dark:hover:bg-slate-200">
              See More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
