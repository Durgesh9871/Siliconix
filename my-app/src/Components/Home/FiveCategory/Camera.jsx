import React from "react";
import { useNavigate } from "react-router-dom";

const Camera = () => {
  const Navigate = useNavigate();
  return (
    <div className="LaptopCategory" style={{ marginTop: "3rem" }}>
      <h1>Camera's</h1>
      <div className="AllProductCategories">
        <div
          className="Imgclass"
          onClick={() => {
            Navigate("/productLaptop");
          }}
        >
          <img
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61n-xNXuPFL._SL1500_.jpg"
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
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71YzzbMQemL._SL1500_.jpg"
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
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41CaxJpizSL.jpg"
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
            src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61w0vlg+L3L._SL1500_.jpg"
            alt="laptop"
            style={{ padding: "1rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Camera;
