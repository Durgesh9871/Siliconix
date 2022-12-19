import { Button, Input } from "@chakra-ui/react";
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <h1>Login </h1>
      <form>
        <Input placeholder="E-mail" size="lg" className="FormInput" />
        <Input placeholder="Password" size="lg" className="FormInput" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
