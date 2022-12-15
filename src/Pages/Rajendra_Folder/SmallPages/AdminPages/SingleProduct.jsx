import React, { useState } from "react";
import "../All_CSS_FILES/Admin.css";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Deletepro } from "../../../../Redux/Admin_Product/Action";
import { Updatefunc } from "../../../../Redux/Admin_Product/Action";

const SingleProduct = ({ value }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const HandleDeleteFunc = () => {
    alert("Your Product Deleted Successfully");
    dispatch(Deletepro(value.id));
  };

  const [UpdateDetailsFunc, setUpdateDetailsFunc] = useState({
    title: value.title,
    desc: value.description,
    brand: value.brand,
    prize: value.price,
    color: value.color,
    discount: value.discount,
  });

  const HandleValuechange = (e) => {
    const { name, value } = e.target;
    setUpdateDetailsFunc({
      ...UpdateDetailsFunc,
      [name]: value,
    });
  };

  const HandleSaveButton = () => {
    dispatch(Updatefunc(UpdateDetailsFunc, value.id));
  };

  return (
    <div className="SingleImages">
      <img src={value.Images[0].imageFront} alt="image" />
      <h2
        style={{
          fontWeight: "bolder",
          color: "rgb(66 103 171)",
          textAlign: "Center",
        }}
      >
        {value.title}
      </h2>
      <p style={{ fontWeight: "400" }}>{value.description}</p>
      <h1>
        <span style={{ fontWeight: "700" }}>Company</span> : {value.brand}
      </h1>
      <p>
        <span style={{ fontWeight: "700" }}>Prize</span> : {value.price}
      </p>
      <p>
        <span style={{ fontWeight: "700" }}>Color</span> : {value.color}
      </p>
      <p>
        <span style={{ fontWeight: "700" }}>Discount</span> : {value.discount}
      </p>
      <div className="crud_Button">
        <button>
          <BiEdit
            className="EditButton"
            onClick={() => {
              onOpen(), EditDataFunc();
            }}
          />
        </button>
        <button>
          <AiFillDelete className="DeleteButton" onClick={HandleDeleteFunc} />
        </button>
      </div>

      {/* button login start from here  */}

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit The Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Change Title"
              size="lg"
              className="ChangeInputbox"
              name="title"
              defaultValue={value.title}
              onChange={HandleValuechange}
            />
            <Input
              placeholder="Change Desc"
              size="lg"
              className="ChangeInputbox"
              name="desc"
              defaultValue={value.description}
              onChange={HandleValuechange}
            />
            <Input
              placeholder="Change Brand"
              size="lg"
              className="ChangeInputbox"
              name="brand"
              defaultValue={value.brand}
              onChange={HandleValuechange}
            />
            <Input
              placeholder="Change Prize"
              size="lg"
              className="ChangeInputbox"
              name="prize"
              defaultValue={value.price}
              onChange={HandleValuechange}
            />
            <Input
              placeholder="Change Color"
              size="lg"
              className="ChangeInputbox"
              name="color"
              defaultValue={value.color}
              onChange={HandleValuechange}
            />
            <Input
              placeholder="Change Discount"
              size="lg"
              className="ChangeInputbox"
              name="discount"
              defaultValue={value.discount}
              onChange={HandleValuechange}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                HandleSaveButton(), onClose();
              }}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SingleProduct;
