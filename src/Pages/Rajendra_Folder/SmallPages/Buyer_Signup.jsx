import { Button, FormControl, Input } from "@chakra-ui/react";
import "./All_CSS_FILES/Admin_Signup.css";

import React, { useState } from "react";

const Buyer_Signup = () => {
  const [AdminDetails, setAdminDetails] = useState({
    name: "",
    businessEmail: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    type: "ADMIN",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({ ...AdminDetails, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (AdminDetails.password !== AdminDetails.confirmPassword) {
      alert("Password Don't Match");
    } else if (AdminDetails.password.length < 7) {
      alert("Password Length is Very Small");
    } else if (AdminDetails.phoneNo.length !== 10) {
      alert("Number is Invalid");
    } else {
      console.log(AdminDetails);
    }
  };
  return (
    <>
      <form className="FormData" onSubmit={HandleSubmit}>
        <div className="InsideForm">
          <h1>Coustomer Signup</h1>
          <FormControl isRequired className="FormControl">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={AdminDetails.name}
              onChange={HandleChange}
            />
          </FormControl>
          {/* ********************************************* */}
          <FormControl isRequired className="FormControl">
            <Input
              type="email"
              placeholder="Email"
              name="businessEmail"
              value={AdminDetails.businessEmail}
              onChange={HandleChange}
            />
          </FormControl>
          {/* ********************************************* */}
          <FormControl isRequired className="FormControl">
            <Input
              type="number"
              placeholder="Phone no."
              name="phoneNo"
              value={AdminDetails.phoneNo}
              onChange={HandleChange}
            />
          </FormControl>
          {/* ********************************************* */}
          <FormControl isRequired className="FormControl">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={AdminDetails.password}
              onChange={HandleChange}
            />
          </FormControl>
          {/* ********************************************* */}
          <FormControl isRequired className="FormControl">
            <Input
              type="password"
              placeholder=" Confirm Password"
              name="confirmPassword"
              value={AdminDetails.confirmPassword}
              onChange={HandleChange}
            />
          </FormControl>
          {/* ********************************************* */}
          <Button colorScheme="whatsapp" variant="solid" type="submit">
            Signup
          </Button>
        </div>
      </form>
    </>
  );
};

export default Buyer_Signup;
