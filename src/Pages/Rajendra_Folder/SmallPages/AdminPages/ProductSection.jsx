import React from "react";
import { Mobile_Data } from "../../Mobile_Data";
import SingleProduct from "./SingleProduct";

const ProductSection = () => {
  console.log(Mobile_Data);
  return (
    <>
      <div className="AllSingleProduct">
        {Mobile_Data.Mobile.map((ele) => {
          return <SingleProduct value={ele} key={ele.id} />;
        })}
      </div>
    </>
  );
};

export default ProductSection;
