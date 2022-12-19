import { Button, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../Redux/Redux/Action";
import AddProduct from "./AddProduct";
import "./AdminDashboard.css";
import SearchBar from "./SearchBar";
import SingleProduct from "./SingleProduct";

const Admin_Dashboard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((ele) => ele.order);
  let [pagination, setPagination] = useState([]);

  useEffect(() => {
    dispatch(GetProduct());
    axios
      .get("https://639d63ed16d1763ab15df85c.mockapi.io/laptop")
      .then((res) =>
        setPagination(new Array(Math.ceil(res.data.length / 10)).fill(0))
      );
  }, []);

  return (
    <div className="AdminDashboard">
      {/* <SearchBar /> */}
      <hr />
      <AddProduct />
      <div className="AllProduct">
        {products.length > 0 ? (
          products.map((ele) => <SingleProduct ele={ele} key={ele.id} />)
        ) : (
          <>
            <Skeleton
              height="25rem"
              width={"100%"}
              borderRadius="8px"
              marginTop={"3rem"}
            />
            <Skeleton
              height="25rem"
              width={"100%"}
              borderRadius="8px"
              marginTop={"3rem"}
            />
            <Skeleton
              height="25rem"
              width={"100%"}
              borderRadius="8px"
              marginTop={"3rem"}
            />
            <Skeleton
              height="25rem"
              width={"100%"}
              borderRadius="8px"
              marginTop={"3rem"}
            />
            <Skeleton
              height="25rem"
              width={"100%"}
              borderRadius="8px"
              marginTop={"3rem"}
            />
            <Skeleton
              height="25rem"
              width={"100%"}
              borderRadius="8px"
              marginTop={"3rem"}
            />
          </>
        )}
      </div>
      <hr style={{ marginTop: "2rem" }} />
      <div className="PaginationPart">
        {pagination.length > 0
          ? pagination.map((_, i) => (
              <Button
                border={"none"}
                onClick={() => {
                  dispatch(GetProduct(i + 1));
                }}
                key={i}
              >
                {i + 1}
              </Button>
            ))
          : null}
      </div>
    </div>
  );
};

export default Admin_Dashboard;
