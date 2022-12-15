import React, { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import {
  Button,
  FormControl,
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

const AddProductPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [PostData, setPostData] = useState({
    title: "",
    price: "",
    brand: "",
    desc: "",
    color: "",
    discount: "",
    images: "",
  });

  const HandleChages = (e) => {
    const { name, value } = e.target;
    setPostData({ ...PostData, [name]: value });
  };

  return (
    <div>
      <Button colorScheme="teal" size="lg" onClick={onOpen}>
        <span style={{ padding: "4px" }}>Add Product</span>
        <BsFillCartPlusFill />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add A Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired className="FormControl">
              <Input type="email" placeholder="Image URL" name="image" />
              <Input type="email" placeholder="Title" name="title" />
              <Input
                type="email"
                placeholder="Description"
                name="description"
              />
              <Input type="email" placeholder="Price" name="price" />
              <Input type="email" placeholder="color" name="color" />
              <Input type="email" placeholder="Discount" name="discount" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddProductPage;

// {
//   "id": 40,
//   "categories": "",
//   "title": "Motorola Edge 20 5G",
//   "price": "40000",
//   "brand": "motorola",
//   "description": "It has (128GB, 8GB) 6.7 OLED, 108MP Triple Camera, Dual SIM, Euro 5G International Model, Fast Car Charger",
//   "color": "black",
//   "discount": "6000",
//   "reviews": [
//     "Great Product",
//     "Value for money"
//   ],
//   "Images": [
//     {
//       "imageFront": "https://m.media-amazon.com/images/I/51buylTAn4L._AC_SL1000_.jpg"
//     },
//     {
//       "imageFront": "https://m.media-amazon.com/images/I/51Bm-1A-g8L._AC_SL1000_.jpg"
//     },
//     {
//       "imageFront": "https://m.media-amazon.com/images/I/41vzwaaO8CL._AC_SL1000_.jpg"
//     }
//   ]
// }
