import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../../../Redux/Admin_Product/Action";
import { Mobile_Data } from "../../Mobile_Data";
import SingleProduct from "./SingleProduct";

const ProductSection = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.order);
  useEffect(() => {
    dispatch(GetProduct());
  }, []);
  return (
    <>
      <div className="AllSingleProduct">
        {products.length > 0
          ? products.map((ele) => {
              return <SingleProduct value={ele} key={ele.id} />;
            })
          : null}
      </div>
    </>
  );
};

export default ProductSection;
