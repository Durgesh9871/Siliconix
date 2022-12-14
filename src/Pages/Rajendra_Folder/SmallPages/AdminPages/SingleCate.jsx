import { Checkbox } from "@chakra-ui/react";
import React from "react";
import "../All_CSS_FILES/Admin.css";

const SingleCate = ({ value }) => {
  return (
    <>
      {/* ########################################### */}
      <Checkbox size="lg" colorScheme="whatsapp" className="firstcategory">
        {value}
      </Checkbox>
    </>
  );
};

export default SingleCate;
