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
            <div className="ShopOwner" colorScheme="teal">
              <img src={Owner} alt="Owner" />
              <h1>Signup as Admin</h1>
            </div>
            <div className="Coustomer" colorScheme="teal">
              <img src={coustomer} alt="Coutomer" />
              <h1>Signup as Buyer</h1>
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
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={secondOnClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login_Button;
