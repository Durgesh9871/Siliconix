import { Button, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import "./User.css";
import { LoginPostrequest } from "../../All_API_REQUEST/LoginPostRequest";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const User = () => {
  const toast = useToast();
  const Navigate = useNavigate();
  const UniqueValue = Math.random();
  const [AdminData, setAdminData] = useState({
    email: "",
    password: "",
    fullname: "",
    gender: "",
    dob: "",
    type: "USER",
    userid: UniqueValue,
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
    } else {
      LoginPostrequest(AdminData);
      localStorage.setItem("USERID", JSON.stringify(UniqueValue));
      setAdminData({
        email: "",
        password: "",
        fullname: "",
        gender: "",
        dob: "",
      });
      Navigate("/");
    }
  };

  return (
    <div className="UserSignup">
      <form onSubmit={HandleSubmit}>
        <h1>
          <span style={{ color: "red" }}>B</span>ECOME A{" "}
          <span style={{ color: "red" }}>C</span>IRCUIT{" "}
          <span style={{ color: "red" }}>M</span>EMBER{" "}
        </h1>
        <Input
          placeholder="Email address"
          size="lg"
          type={"email"}
          className="UserFormInput"
          name="email"
          value={AdminData.email}
          onChange={HandleChange}
          required
        />
        <Input
          placeholder="Password"
          size="lg"
          type={"password"}
          className="UserFormInput"
          name="password"
          value={AdminData.password}
          onChange={HandleChange}
          required
        />
        <Input
          placeholder="Full name"
          size="lg"
          type={"text"}
          className="UserFormInput"
          name="fullname"
          value={AdminData.fullname}
          onChange={HandleChange}
          required
        />
        <Select
          placeholder="Choose Gender"
          spacing={3}
          className="UserFormInput"
          name="gender"
          value={AdminData.gender}
          onChange={HandleChange}
          required
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </Select>
        <Input
          placeholder="dd-mm-yyyy"
          size="lg"
          type={"date"}
          className="UserFormInput"
          name="dob"
          value={AdminData.dob}
          onChange={HandleChange}
          required
        />
        <Button
          className="UserFormInput"
          transition="0.3s ease-in-out"
          cursor={"pointer"}
          backgroundColor="black"
          color={"white"}
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
  );
};

export default User;
