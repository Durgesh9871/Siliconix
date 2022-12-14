import React from "react";
import "../All_CSS_FILES/Admin.css";

const SingleProduct = ({ value }) => {
  console.log(value);
  return (
    <div className="SingleImages">
      <img src={value.Images[0].imageFront} alt="image" />
      <h2 style={{ fontWeight: "bolder", color: "rgb(66 103 171)" }}>
        {value.title}
      </h2>
      <p style={{ fontWeight: "400" }}>{value.description}</p>
      <h1>
        <span style={{ fontWeight: "700" }}>Company</span> : {value.brand}
      </h1>
      <p>
        <span style={{ fontWeight: "700" }}>Prize</span> : {value.price}
      </p>
      <p>
        <span style={{ fontWeight: "700" }}>Color</span> : {value.color}
      </p>
      <p>
        <span style={{ fontWeight: "700" }}>Discount</span> : {value.discount}
      </p>
    </div>
  );
};

export default SingleProduct;
