import React from "react";
import "./header.scss";
import logo from "../../assets/header/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header class="header">
      <nav class="header__navbar container">
        <div class="header__logo">
          <a href="#">
            <img src={logo} alt="here is the logo of website" />
          </a>
        </div>
        <ul class="header__list df">
          <li class="header__item">
            <NavLink className="header__link" to={"./"}>
              Home
            </NavLink>
          </li>

          <li class="header__item">
            <a class="header__link" href="#">
              Contact
            </a>
          </li>
          <li class="header__item">
            <NavLink className="header__link" to={"./admin"}>
              Admin
            </NavLink>
          </li>
          <li class="header__item">
            <NavLink id="sing-in" className="header__link" to={"./login"}>
              Sign in
            </NavLink>
          </li>
        </ul>

        <div class="header__navbar__btns">
          <form class="header__form">
            <input
              class="header__form__search"
              type="search"
              placeholder="Search"
            />
            <img
              class="header__form__search__icon"
              src="images/home/header/search-icon.svg"
              alt=""
            />
          </form>

          <div class="header__navbar__btns__icons">
            <img
              class="header__navbar__btns__icons__heart"
              src="images/home/header/heart-icon.svg"
              alt=""
            />
            <img
              class="header__navbar__btns__icons__cart"
              src="images/home/header/cart-icon.svg"
              alt=""
            />
          </div>

          <button class="header__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
