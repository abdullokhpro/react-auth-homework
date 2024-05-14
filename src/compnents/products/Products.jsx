import React, { useEffect, useState } from "react";
import "./products.scss";
import axios from "../../api";
import { CgKey } from "react-icons/cg";
import Loading from "../loading/Loading";

const Products = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`products`)
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  let productItems = product?.map((el) => (
    <div key={el.id} class="products__card">
      <div class="products__card__top">
        <img class="products__card__top__img" src={el.images[0]} alt="" />
      </div>

      <div class="products__card__bottom">
        <p class="products__card__text">${el.title}</p>
        <p class="products__card__price">$${el.price}</p>
      </div>
    </div>
  ));

  return (
    <section id="products" class="products">
      <div class="container">
        {loading ? <Loading /> : <></>}
        <div class="products__cards">{productItems}</div>

        <button class="products__btn">View All Products</button>
      </div>
    </section>
  );
};

export default Products;
