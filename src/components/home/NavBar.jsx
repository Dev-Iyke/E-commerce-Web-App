import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import CartIcon from "./CartIcon";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const [productsSectionClicked, setProductsSectionClicked] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header className="shadow-md pr-6 py-6 fixed w-full scroll-mb-24 z-10 bg-[#F2F0F1] text-black">
      <div className="flex items-center justify-between w-[95%] md:w-[90%] lg:w-[85%] mx-auto">
        <a href="/" className="font-integral_bold text-3xl pr-4">
          {/* SHOP.CO */}
          <img
            src="/freshmart-logo-2.png"
            alt="logo"
            className="max-w-[80px] w-full"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            onClick={() => setProductsSectionClicked(false)}
            className={({ isActive }) =>
              isActive && !productsSectionClicked
                ? "border-b-2 border-blue-500"
                : ""
            }
          >
            Home
          </NavLink>
          <a
            href="/#products"
            onClick={() => setProductsSectionClicked(true)}
            className={`${
              productsSectionClicked ? "border-b-2 border-blue-500" : ""
            }`}
          >
            Products
          </a>
          <NavLink
            to="/checkout"
            onClick={() => setProductsSectionClicked(false)}
            className={({ isActive }) =>
              isActive && !productsSectionClicked
                ? "border-b-2 border-blue-500"
                : ""
            }
          >
            Checkout
          </NavLink>
        </nav>
        <div className="flex gap-4 items-center">
          {!isAuthenticated ? (
            <>
              <NavLink to="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </NavLink>
              <NavLink to="/signup">
                <Button size="sm">Sign Up</Button>
              </NavLink>
            </>
          ) : (
            <Button
              onClick={() => {
                logout();
                navigate("/");
              }}
              size="sm"
            >
              Log Out
            </Button>
          )}
          <NavLink to="/checkout">
            <CartIcon />
          </NavLink>
        </div>
        {/* <a href="/#products" onClick={() => setProductsSectionClicked(true)}>
          <Button className="sm:w-full" size="sm">
            {" "}
            Search
          </Button>
        </a> */}
      </div>
    </header>
  );
};

export default NavBar;
