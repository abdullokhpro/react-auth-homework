import React, { useState } from "react";
import "./login.scss";
import sideImg from "../../assets/login/sideImg.png";
import { toast } from "react-toastify";
import axios from "../../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");

  const handleLogin = (e) => {
    e.preventDefault();
    let navigate = useNavigate();

    let user = { username, password };

    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log(res);
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        toast.error("username or password is incorrect");
      });
  };

  return (
    <section id="login" class="login">
      <div class="container login__container">
        <div class="login__left">
          <img src={sideImg} alt="" />
        </div>

        <div class="login__right">
          <h2 class="login__title">Log in to Exclusive</h2>
          <p class="login__text">Enter your details below</p>
          <form onSubmit={handleLogin} class="login__form">
            <input
              id="login__email"
              onChange={(e) => setUsername(e.target.value)}
              class="login__form__input login__form__email"
              type="text"
              placeholder="Email or Phone Number"
              value={username}
            />
            <input
              id="login__password"
              onChange={(e) => setPassword(e.target.value)}
              class="login__form__input login__form__password"
              type="password"
              placeholder="Password"
              value={password}
            />
            <div class="login__form__btns">
              <button class="login__form__btn">Log In</button>
              <a class="login__form__link" href="#">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
