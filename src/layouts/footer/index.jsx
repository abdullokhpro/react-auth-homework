import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <ul class="footer__cards">
          <li class="footer__card">
            <h3 class="footer__card__title">Exclusive</h3>
            <p class="footer__card__main-text">Subscribe</p>
            <p class="footer__card__text">Get 10% off your first order</p>
            <form class="footer__card__form">
              <input
                class="footer__card__input"
                type="text"
                placeholder="Enter your email"
              />
              <img
                class="footer__card__form__img"
                src="images/home/footer/icon-send.svg"
                alt=""
              />
            </form>
          </li>

          <li class="footer__card">
            <h3 class="footer__card__title">Support</h3>
            <p class="footer__card__text">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p class="footer__card__text">exclusive@gmail.com</p>
            <p class="footer__card__text">+88015-88888-9999</p>
          </li>

          <li class="footer__card">
            <h3 class="footer__card__title">Account</h3>
            <p class="footer__card__text">My Account</p>
            <p class="footer__card__text">Login / Register</p>
            <p class="footer__card__text">Cart</p>
            <p class="footer__card__text">Wishlist</p>
          </li>

          <li class="footer__card">
            <h3 class="footer__card__title">Quick Link</h3>
            <p class="footer__card__text">Privacy Policy</p>
            <p class="footer__card__text">Terms Of Use</p>
            <p class="footer__card__text">FAQ</p>
            <p class="footer__card__text">Contact</p>
          </li>

          <li class="footer__card">
            <h3 class="footer__card__title">Download App</h3>
            <p class="footer__card__text">Save $3 with App New User Only</p>
            <div class="footer__card__download">
              <img src="images/home/footer/qrcode.svg" alt="" />
              <div class="footer__card__dowload__plays">
                <img src="images/home/footer/googleplay.svg" alt="" />
                <img src="images/home/footer/appstore.svg" alt="" />
              </div>
            </div>
            <div class="footer__card__icons">
              <img src="images/home/footer/facebook.svg" alt="" />
              <img src="images/home/footer/twitter.svg" alt="" />
              <img src="images/home/footer/instagram.svg" alt="" />
              <img src="images/home/footer/linkedin.svg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
