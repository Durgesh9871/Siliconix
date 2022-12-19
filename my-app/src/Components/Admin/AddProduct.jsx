import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Redux/Action";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const [PostProductData, setPostProductData] = useState({
    title: "",
    url: "",
    color: "",
    brand: "",
    rating: "",
    price: "",
    cate: "",
  });

  const Handlechangevalue = (e) => {
    const { name, value } = e.target;
    setPostProductData({ ...PostProductData, [name]: value });
  };

  const HandleSubmitForm = (e) => {
    e.preventDefault();
    const MainObj = {
      rating: PostProductData.rating,
      categories: "Laptop",
      title: PostProductData.title,
      price: Number(PostProductData.price),
      realPrice: Number(PostProductData.price) + 50,
      brand: PostProductData.brand,
      description:
        "Take it anywhere. With its thin and light design, 6.5 mm micro-edge bezel display.",
      color: PostProductData.color,
      discount: 42,
      reviews: ["Great Product", "Value for money"],
      Images: [
        {
          imageFront: PostProductData.url,
        },
        {
          imageFront:
            "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510531ld.jpg;maxHeight=640;maxWidth=550",
        },
        {
          imageFront:
            "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510531cv1d.jpg;maxHeight=640;maxWidth=550",
        },
      ],
    };
    dispatch(addProduct(MainObj));
  };

  return (
    <>
      <div className="AddProduct">
        <Button
          border={"none"}
          colorScheme="blue"
          height={"3.5rem"}
          width="13rem"
          fontSize={"1.6rem"}
          cursor="pointer"
          onClick={onOpen}
        >
          Add Product
        </Button>

        {/* Modal of the website */}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Product Details</ModalHeader>
            <ModalCloseButton border={"none"} />
            <form onSubmit={HandleSubmitForm}>
              <ModalBody>
                <Input
                  placeholder="URL"
                  size="lg"
                  className="ChangeInputbox"
                  type={"url"}
                  name="url"
                  value={PostProductData.url}
                  onChange={Handlechangevalue}
                  required
                />
                <Input
                  placeholder="Title"
                  size="lg"
                  className="ChangeInputbox"
                  type={"text"}
                  name="title"
                  value={PostProductData.title}
                  onChange={Handlechangevalue}
                  required
                />
                <Input
                  placeholder="Category"
                  size="lg"
                  className="ChangeInputbox"
                  type={"text"}
                  name="cate"
                  value={PostProductData.cate}
                  onChange={Handlechangevalue}
                  required
                />
                <Input
                  placeholder="Brand"
                  size="lg"
                  type={"text"}
                  className="ChangeInputbox"
                  name="brand"
                  value={PostProductData.brand}
                  onChange={Handlechangevalue}
                  required
                />
                <Input
                  placeholder="Color"
                  size="lg"
                  type={"text"}
                  className="ChangeInputbox"
                  name="color"
                  value={PostProductData.color}
                  onChange={Handlechangevalue}
                  required
                />
                <Input
                  placeholder="Rating"
                  size="lg"
                  type={"number"}
                  className="ChangeInputbox"
                  name="rating"
                  value={PostProductData.rating}
                  onChange={Handlechangevalue}
                  required
                />
                <Input
                  placeholder="Price"
                  size="lg"
                  type={"number"}
                  className="ChangeInputbox"
                  name="price"
                  value={PostProductData.price}
                  onChange={Handlechangevalue}
                  required
                />
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                  border="none"
                  height={"3rem"}
                  fontSize="1.2rem"
                >
                  Close
                </Button>
                <Button
                  variant="ghost"
                  border={"none"}
                  type="submit"
                  height={"3rem"}
                  fontSize="1.2rem"
                >
                  Add
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default AddProduct;
