import React from "react";
import { useNavigate } from "react-router-dom";

const MobileCategory = () => {
  const Navigate = useNavigate();
  return (
    <div className="LaptopCategory" style={{ marginTop: "3rem" }}>
      <h1>Mobiles</h1>
      <div className="AllProductCategories">
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://m.media-amazon.com/images/I/71Q0E2DYf2L._AC_SL1500_.jpg"
            alt="laptop"
            style={{ padding: "2rem", height: "18rem" }}
          />
        </div>
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SL1500_.jpg"
            alt="laptop"
            style={{ padding: "2rem", height: "18rem" }}
          />
        </div>
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://m.media-amazon.com/images/I/61nGwbs5jPL._AC_SL1200_.jpg"
            alt="laptop"
            style={{ padding: "2rem", height: "18rem" }}
          />
        </div>
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://m.media-amazon.com/images/I/614WIYgWg7L._AC_SL1500_.jpg"
            alt="laptop"
            style={{ padding: "2rem", height: "18rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileCategory;
