import React from "react";
import { Button } from "../ui/Button";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[#F2F0F1] pt-12 md:pt-28 text-black">
      <div className="pt-12 pb-8 md:pb-24 px-2 sm:px-6 md:px-8 lg:px-18 flex flex-col gap-8 items-center text-center md:text-start md:items-start">
        <h1 className="text-4xl font-integral_bold">
          FIND PRODUCTS THAT MATCHES YOUR STYLE
        </h1>
        <p>
          Browse through our diverse range of meticulously crafted Products,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <a href="#products">
          <Button className="rounded-3xl w-fit px-12">Shop Now</Button>
        </a>
        <div className="flex items-center md:items-start lg:items-center">
          <div className="flex flex-col pr-2 md:pr-4 lg:pr-6">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold">
              200+
            </span>
            <span className="xl:text-nowrap">International Brands</span>
          </div>
          <div className="flex flex-col px-2 md:px-4 lg:px-6 border-black border-x-[1px]">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold">
              2,000+
            </span>
            <span className="xl:text-nowrap">High Quality Products</span>
          </div>
          <div className="flex flex-col pl-2 md:pl-4 lg:pl-6">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold">
              30,000+
            </span>
            <span className="xl:text-nowrap">Happy Customers</span>
          </div>
        </div>
      </div>
      <div className="h-[50vh] md:h-full bg-heroBg bg-cover bg-top"></div>
    </div>
  );
};

export default Hero;
