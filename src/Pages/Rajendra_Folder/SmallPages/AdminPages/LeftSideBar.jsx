import React from "react";
import "../All_CSS_FILES/Admin.css";
import SingleCate from "./SingleCate";

const LeftSideBar = () => {
  return (
    <div>
      <div className="Heading">
        <h1>FILTERS</h1>
        <h2>CLEAR ALL</h2>
      </div>
      <div className="FilterCategory">
        <h1>CATEGORIES</h1>
        <SingleCate value={"Laptop"} />
        <SingleCate value={"Mobiles "} />
        <SingleCate value={"Tv & projector"} />
        <SingleCate value={"Major Appliance"} />
        <SingleCate value={"Watches"} />
      </div>
      <hr className="horiline" />
      <div className="FilterCategory">
        <h1>PRICE</h1>
        <SingleCate value={"Below 3000"} />
        <SingleCate value={"3000 - 5000"} />
        <SingleCate value={"5000 - 10000"} />
        <SingleCate value={"10000 - 20000"} />
        <SingleCate value={"20000 - 40000"} />
        <SingleCate value={"Above 40000"} />
      </div>
      <hr className="horiline" />
      <div className="FilterCategory">
        <h1>BRAND</h1>
        <SingleCate value={"Apple"} />
        <SingleCate value={"Vivo"} />
        <SingleCate value={"One Plus"} />
        <SingleCate value={"Samsung"} />
        <SingleCate value={"MI"} />
        <SingleCate value={"Motorola"} />
      </div>
      <hr className="horiline" />
    </div>
  );
};

export default LeftSideBar;
