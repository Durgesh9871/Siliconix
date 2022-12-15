import { Button, Input } from "@chakra-ui/react";
import React from "react";
import "../All_CSS_FILES/Admin.css";
import AddProductPage from "./AddProductPage";

const SearchBar = () => {
  return (
    <>
      <div id="searchBar">
        <Input placeholder="Search Item" size="lg" />
        <button className="SearchButton">Search</button>
        <AddProductPage />
      </div>
    </>
  );
};

export default SearchBar;
