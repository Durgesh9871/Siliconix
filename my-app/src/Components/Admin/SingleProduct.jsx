import { StarIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { EditIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { Deletepro, Updatefunc } from "../../Redux/Redux/Action";
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
  Box,
  Image,
  useToast,
} from "@chakra-ui/react";

const SingleProduct = ({ ele }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  //   DELETE FUNCTION
  const HandleDeleteFunc = () => {
    dispatch(Deletepro(ele.id));
    toast({
      title: "Product Deleted.",
      description: "Your Product Has been Deleted Successfully",
      status: "success",
      duration: 1000,
    });
  };

  //   UPDATE FUNCTION START FROM HERE

  const [UpdateDetailsFunc, setUpdateDetailsFunc] = useState({
    title: ele.title,
    rating: ele.rating,
    brand: ele.brand,
    price: ele.price,
    color: ele.color,
  });

  const HandleValuechange = (e) => {
    const { name, value } = e.target;
    setUpdateDetailsFunc({
      ...UpdateDetailsFunc,
      [name]: value,
    });
  };

  const HandleSaveButton = () => {
    dispatch(Updatefunc(UpdateDetailsFunc, ele.id));
  };

  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" className="SingleProduct">
        <Image src={ele.Images[0].imageFront} alt={"Images"} />

        <Box p="6" className="AfterImgBox">
          <Box display="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="1rem"
              textTransform="uppercase"
              ml="2"
            >
              {ele.color} &bull; {ele.brand}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="bolder"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
            fontSize="larger"
          >
            {ele.title}
          </Box>

          <Box fontSize={"3xl"}>${ele.price}</Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < ele.rating ? "green.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {"2"} reviews
            </Box>
          </Box>
          <Box className="MainPartOfEdit">
            <EditIcon
              className="EditIcon"
              style={{ color: "blue" }}
              onClick={onOpen}
            />
            <DeleteIcon
              className="EditIcon"
              style={{ color: "red" }}
              onClick={HandleDeleteFunc}
            />
          </Box>
        </Box>
      </Box>
      {/* EDIT DETAILS FUNCTIONALITY START FROM HERE */}

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit The Details</ModalHeader>
          <ModalCloseButton border={"none"} />
          <ModalBody>
            <Input
              placeholder="Change Title"
              size="lg"
              className="ChangeInputbox"
              name="title"
              defaultValue={ele.title}
              onChange={HandleValuechange}
            />
            <Input
              placeholder="Change Company"
              size="lg"
              className="ChangeInputbox"
              name="brand"
              defaultValue={ele.brand}
              onChange={HandleValuechange}
            />
            <Input
              placeholder="Change color"
              size="lg"
              className="ChangeInputbox"
              name="color"
              defaultValue={ele.color}
              onChange={HandleValuechange}
            />
            <Input
              placeholder="Change Rating"
              size="lg"
              className="ChangeInputbox"
              name="rating"
              defaultValue={ele.rating}
              onChange={HandleValuechange}
            />
            <Input
              placeholder="Change price"
              size="lg"
              className="ChangeInputbox"
              name="price"
              defaultValue={ele.price}
              onChange={HandleValuechange}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose} border="none">
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => (
                onClose(),
                HandleSaveButton(),
                toast({
                  title: "Detail Update.",
                  description: "Your Details has been updated.",
                  status: "success",
                  duration: 1500,
                  position: "top",
                })
              )}
              border="none"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SingleProduct;
