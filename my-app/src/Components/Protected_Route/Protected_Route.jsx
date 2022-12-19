import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginGetRequest } from "../All_API_REQUEST/LoginPostRequest";

const Protected_Route = ({ children }) => {
  const [LoginInfo, setLoginInfo] = useState([]);

  useEffect(() => {
    const value = LoginGetRequest();
    value.then((res) => setLoginInfo(res));
  }, []);
  console.log(LoginInfo, "loginInfo");

  if (LoginInfo === []) {
    console.log("Naivate");
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default Protected_Route;
