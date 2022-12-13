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
import React from "react";
import { useNavigate } from "react-router-dom";
import coustomer from "./Images/Coustomer.png";
import Owner from "./Images/Owner.png";
import "./Login_Button.css";

const Login_Button = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: secondIsOpen,
    onOpen: secondOnOpen,
    onClose: secondOnClose,
  } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const Navigate = useNavigate();

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

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={secondIsOpen}
        onClose={secondOnClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login to your Account </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input ref={initialRef} placeholder="E-mail" type={"email"} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" type={"password"} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Login
            </Button>
            <Button onClick={secondOnClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login_Button;
