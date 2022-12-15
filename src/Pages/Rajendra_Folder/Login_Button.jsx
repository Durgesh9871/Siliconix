import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import coustomer from "./Images/Coustomer.png";
import Owner from "./Images/Owner.png";
import "./Login_Button.css";
import { CheckLogin } from "../../Redux/Auth_Reducer/Action";

const Login_Button = () => {
  const dispatch = useDispatch();
  const { Login } = useSelector((val) => val);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: secondIsOpen,
    onOpen: secondOnOpen,
    onClose: secondOnClose,
  } = useDisclosure();

  const Navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const HandleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email && !loginData.password) {
      alert("Please Fill The Details");
    } else {
      dispatch(CheckLogin(loginData));
      setLoginData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <Button colorScheme="teal" size="lg" onClick={onOpen}>
        Button
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="ShopOwner">
              <img src={Owner} alt="Owner" />
              <button
                className="pushable"
                onClick={() => {
                  Navigate("/admin_signup");
                }}
              >
                <span className="front">Signup as Admin</span>
              </button>
            </div>
            <div className="Coustomer">
              <img src={coustomer} alt="Coutomer" />
              <button
                className="pushable"
                onClick={() => {
                  Navigate("/buyer_signup");
                }}
              >
                <span className="front">Signup as Buyer</span>
              </button>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Close
            </Button>
            <Button
              variant="ghost"
              colorScheme="whatsapp"
              onClick={() => {
                onClose(), secondOnOpen();
              }}
            >
              Have Account
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Login BUtton of the Page  */}

      <Modal isOpen={secondIsOpen} onClose={secondOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login to your Account </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={HandleLoginSubmit}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  placeholder="E-mail"
                  type={"email"}
                  name="email"
                  value={loginData.email}
                  onChange={HandleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  type={"password"}
                  name="password"
                  value={loginData.password}
                  onChange={HandleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                type="submit"
                onClick={() => {
                  loginData.email && loginData.password
                    ? secondOnClose()
                    : null;
                }}
              >
                Login
              </Button>
              <Button onClick={secondOnClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login_Button;
