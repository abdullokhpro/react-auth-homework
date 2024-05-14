import React from "react";

let loadingItem = (
  <div class="loading">
    <div class="loading__item">
      <div class="loading__img bg__animation"></div>
      <div class="loading__title bg__animation"></div>
      <div class="loading__title bg__animation"></div>
    </div>
  </div>
);
const Loading = () => {
  return (
    <>
      {loadingItem}
      {loadingItem}
      {loadingItem}
    </>
  );
};

export default Loading;
