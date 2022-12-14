import { Button, Input } from "@chakra-ui/react";
import React from "react";
import "../All_CSS_FILES/Admin.css";

const SearchBar = () => {
  return (
    <>
      <div id="searchBar">
        <Input placeholder="Search Item" size="lg" />
        <button className="SearchButton">Search</button>
      </div>
    </>
  );
};

export default SearchBar;
