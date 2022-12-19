import React, { useState } from "react";
import "./Admin.css";
import { Button, Input, Select } from "@chakra-ui/react";
import { LoginPostrequest } from "../../All_API_REQUEST/LoginPostRequest";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Admin = () => {
  const toast = useToast();

  const Navigate = useNavigate();
  const [AdminData, setAdminData] = useState({
    email: "",
    password: "",
    fullname: "",
    mobile: "",
    dob: "",
    type: "ADMIN",
    userid: Math.random(),
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...AdminData, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (AdminData.password.length < 7) {
      toast({
        title: `Please Enter Minimum 7 character`,
        position: "top",
        duration: 1000,
      });
    } else if (AdminData.mobile.length !== 10) {
      toast({
        title: `Please Enter Correct Number`,
        position: "top",
        duration: 1000,
      });
    } else {
      LoginPostrequest(AdminData);
      //   localStorage.setItem("USERID", JSON.stringify(UniqueValue));
      setAdminData({
        email: "",
        password: "",
        fullname: "",
        gender: "",
        dob: "",
      });
      Navigate("/admin");
    }
  };

  return (
    <>
      <div className="UserSignup">
        <form onSubmit={HandleSubmit}>
          <h1>
            <span style={{ color: "red" }}>W</span>ELCOME{" "}
            <span style={{ color: "red" }}>C</span>IRCUIT{" "}
            <span style={{ color: "red" }}>C</span>ONTROLLER{" "}
          </h1>
          <Input
            placeholder="Business Email"
            size="lg"
            type={"email"}
            className="AdminFormInput"
            name="email"
            value={AdminData.email}
            onChange={HandleChange}
            required
          />
          <Input
            placeholder="Password"
            size="lg"
            type={"password"}
            className="AdminFormInput"
            name="password"
            value={AdminData.password}
            onChange={HandleChange}
            required
          />
          <Input
            placeholder="Full name"
            size="lg"
            type={"text"}
            className="AdminFormInput"
            name="fullname"
            value={AdminData.fullname}
            onChange={HandleChange}
            required
          />
          <Input
            placeholder="Mobile no"
            size="lg"
            type={"number"}
            className="AdminFormInput"
            name="mobile"
            value={AdminData.mobile}
            onChange={HandleChange}
            required
          />
          <Input
            placeholder="dd-mm-yyyy"
            size="lg"
            type={"date"}
            className="AdminFormInput"
            name="dob"
            value={AdminData.dob}
            onChange={HandleChange}
            required
          />
          <Button
            className="AdminFormInput"
            cursor={"pointer"}
            transition="0.3s ease-in-out"
            background="black"
            color="white"
            _hover={{
              background: "black",
              color: "white",
            }}
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    </>
  );
};

export default Admin;
