import React from "react";
import { useNavigate } from "react-router-dom";

export const Watchescategory = () => {
  const Navigate = useNavigate();
  return (
    <div className="LaptopCategory" style={{ marginTop: "3rem" }}>
      <h1>Watches</h1>
      <div
        className="AllProductCategories"
        onClick={() => {
          Navigate("/productLaptop");
        }}
      >
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6348/6348809_sd.jpg"
            alt="laptop"
            style={{ padding: "3rem", height: "18rem" }}
          />
        </div>
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517840_sd.jpg"
            alt="laptop"
            style={{ padding: "1rem" }}
          />
        </div>
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6484/6484733_sd.jpg"
            alt="laptop"
            style={{ padding: "1rem", height: "18rem" }}
          />
        </div>
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426937_sd.jpg"
            alt="laptop"
            style={{ padding: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};
