import { Button, FormControl, Input } from "@chakra-ui/react";
import "./All_CSS_FILES/Admin_Signup.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buyer_Signup = () => {
  const Navigate = useNavigate();

  const [AdminDetails, setAdminDetails] = useState({
    name: "",
    businessEmail: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    type: "BUYER",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({ ...AdminDetails, [name]: value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (AdminDetails.password !== AdminDetails.confirmPassword) {
      alert("Password Don't Match");
    } else if (AdminDetails.password.length < 7) {
      alert("Password Length is Very Small");
    } else if (AdminDetails.phoneNo.length !== 10) {
      alert("Number is Invalid");
    } else {
      const { name, businessEmail, phoneNo, password, confirmPassword, type } =
        AdminDetails;

      // WE ARE MAKING THE REQUEST TO ADD THE DATA TO FIREBASE ALL THESE DETAILS ARE VERY IMPORTANT AND YOUR HAVE TO WRITE ALL THESE DETAILS
      const res = await fetch(
        "https://unit-5-project-contact-form-default-rtdb.asia-southeast1.firebasedatabase.app/contact_form_unit_five_project.json", // THIS IS MAIN URL AND YOUR DATABASE WHERE YOUR DATA IS STORED YOU ARE MAKEING POST REQUEST TO POST DATA AND TO GET DATA MAKE A GET REQUEST.
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            businessEmail,
            phoneNo,
            password,
            confirmPassword,
            type,
          }),
        }
      );
      if (res) {
        setAdminDetails({
          name: "",
          businessEmail: "",
          phoneNo: "",
          password: "",
          confirmPassword: "",
          type: "ADMIN",
        });
        alert("Your Details are Added Successfully");
        Navigate("/");
      }
      console.log(res);
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
