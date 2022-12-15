import React from "react";
import LeftSideBar from "./AdminPages/LeftSideBar";
import Pagination from "./AdminPages/Pagination";
import ProductSection from "./AdminPages/ProductSection";
import SearchBar from "./AdminPages/SearchBar";
import "./All_CSS_FILES/Admin.css";

const AdminPage = () => {
  return (
    <>
      <div id="navbar">this is Navbar</div>
      <div className="SearchBar">
        <SearchBar />
      </div>
      <div id="MainPart">
        <div className="LeftsideBar">
          <LeftSideBar />
        </div>
        <div className="secondDiv">
          <div className="ProductSection">
            <ProductSection />
          </div>
          <div className="Pagination">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
