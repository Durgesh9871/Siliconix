import { Button, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./All_CSS_FILES/Admin_Signup.css";

const Admin_Signup = () => {
  const [AdminDetails, setAdminDetails] = useState({
    name: "",
    businessEmail: "",
    images: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    type: "ADMIN",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({ ...AdminDetails, [name]: value });
  };

  const Navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (AdminDetails.password !== AdminDetails.confirmPassword) {
      alert("Password Don't Match");
    } else if (AdminDetails.password.length < 7) {
      alert("Password Length is Very Small");
    } else if (AdminDetails.phoneNo.length !== 10) {
      alert("Number is Invalid");
    } else {
      // MAIN DATA BASE START FROM HERE
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
            images: "",
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
          images: "",
          password: "",
          confirmPassword: "",
          type: "ADMIN",
        });
        alert("Your Details are Added Successfully");
        Navigate("/admin");
      }
    }
  };
  return (
    <>
      <form className="FormData" onSubmit={HandleSubmit} method="POST">
        <div className="InsideForm">
          <h1>Admin Signup</h1>
          <FormControl isRequired className="FormControl">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              value={AdminDetails.name}
              onChange={HandleChange}
              isRequired
            />
          </FormControl>
          {/* ********************************************* */}
          <FormControl isRequired className="FormControl">
            <Input
              type="text"
              placeholder="Avatar URL"
              name="images"
              value={AdminDetails.images}
              onChange={HandleChange}
              isRequired
            />
          </FormControl>
          {/* ********************************************* */}
          <FormControl isRequired className="FormControl">
            <Input
              type="email"
              placeholder="Business Email"
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

export default Admin_Signup;
