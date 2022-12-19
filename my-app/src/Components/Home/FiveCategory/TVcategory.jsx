import React from "react";
import { useNavigate } from "react-router-dom";

export const TVcategory = () => {
  const Navigate = useNavigate();
  return (
    <div className="LaptopCategory" style={{ marginTop: "3rem" }}>
      <h1>TV's</h1>
      <div className="AllProductCategories">
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517511_sd.jpg;maxHeight=640;maxWidth=550"
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
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6472/6472252_sd.jpg;maxHeight=640;maxWidth=550"
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
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401719_sd.jpg;maxHeight=640;maxWidth=550"
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
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501937_rd.jpg;maxHeight=640;maxWidth=550"
            alt="laptop"
            style={{ padding: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};
