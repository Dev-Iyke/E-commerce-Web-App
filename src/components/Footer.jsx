import React from "react";
import "../footer.css";
const Footer = () => {
  return (
    <footer>
      <div class="content">
        <div class="top">
          <div class="logo-details">
            <span class="logo_name" className="font-integral_bold">
              SHOP.CO
            </span>
          </div>
          <div class="media-icons">
            <a target="blank" href="https://www.facebook.com/ikechukwu.thompson.7">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a target="blank" href="https://x.com/Thommy_Pro">
              <i class="fab fa-twitter"></i>
            </a>
            <a target="blank" href="https://www.instagram.com/thommy_iyke20">
              <i class="fab fa-instagram"></i>
            </a>
            <a target="blank" href="https://www.linkedin.com/in/obasi-ikechukwu">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a target="blank" href="https://github.com/dev-iyke">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div class="link-boxes">
          <ul class="box">
            <li class="link_name">Company</li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Get started</a>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Services</li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Shipping</a>
            </li>
            <li>
              <a href="/">Households</a>
            </li>
            <li>
              <a href="/">Shopping</a>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Account</li>
            <li>
              <a href="/">Profile</a>
            </li>
            <li>
              <a href="/">My account</a>
            </li>
            <li>
              <a href="/">Preferences</a>
            </li>
            <li>
              <a href="/">Purchase</a>
            </li>
          </ul>
          <ul class="box">
            <li class="link_name">Branches</li>
            <li>
              <a href="/">Lagos</a>
            </li>
            <li>
              <a href="/">Port Harcourt</a>
            </li>
            <li>
              <a href="/">Abuja</a>
            </li>
            <li>
              <a href="/">Owerri</a>
            </li>
          </ul>
          <ul class="box input-box">
            <li class="link_name">Subscribe</li>
            <li>
              <input type="text" placeholder="Enter your email" />
            </li>
            <li>
              <input type="button" value="Subscribe" />
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <span class="copyright_text">
            Copyright Obasi Ikechukwu © 2024 <a href="/">SHOP.CO </a>All rights
            reserved
          </span>
          <span class="policy_terms">
            <a href="/">Privacy policy</a>
            <a href="/">Terms & condition</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
