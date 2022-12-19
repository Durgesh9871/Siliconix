import React from "react";
import { useNavigate } from "react-router-dom";

const LaptopCategory = () => {
  const Navigate = useNavigate();
  return (
    <div className="LaptopCategory" style={{ marginTop: "3rem" }}>
      <h1>Laptops</h1>
      <div className="AllProductCategories">
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71QOTMwkY8L._SL1500_.jpg"
            alt="laptop"
          />
        </div>
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/719C6bJv8jL._SL1500_.jpg"
            alt="laptop"
          />
        </div>
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81t2f-NtkeL._SL1500_.jpg"
            alt="laptop"
          />
        </div>
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71--IQUHVwL._SL1500_.jpg"
            alt="laptop"
          />
        </div>
      </div>
    </div>
  );
};

export default LaptopCategory;
