import { useState } from "react";
import "./App.css";
import Header from "./layouts/header";
import Hero from "./compnents/hero";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Footer from "./layouts/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
