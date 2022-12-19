import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { GetProduct } from "../../Redux/Redux/Action";
import "./AdminDashboard.css";

const SearchBar = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  const HandleSubmit = () => {
    console.log(searchData);
  };
  return (
    <div>
      <div id="searchBar">
        <Input
          placeholder="Search Item"
          size="lg"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <Button
          border={"none"}
          colorScheme="whatsapp"
          height={"3rem"}
          width="10rem"
          fontSize={"1.2rem"}
          cursor="pointer"
          onClick={HandleSubmit}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
