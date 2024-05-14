import React from "react";
import "./hero.scss";
import heroImg from "../../assets/hero/phone.png";

const Hero = () => {
  return (
    <section id="hero" class="hero">
      <div class="container hero__container">
        <div class="hero__content">
          <div class="hero__iphone-series">
            <p class="hero__iphone__text">iPhone 14 Series</p>
          </div>

          <h1 class="hero__title">Up to 10% off Voucher</h1>

          <div class="hero__shop">
            <p class="hero__shop__text">Shop Now</p>

            <img src="images/home/hero/right-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
