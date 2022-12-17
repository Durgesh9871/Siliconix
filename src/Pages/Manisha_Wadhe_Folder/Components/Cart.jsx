import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [localStorageData, setLocalstorageData] = useState([]);

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleRemove = () => {
    setQuantity((prev) => prev - 1);
  };

  const lcoalvalue = useSelector(
    (Local) => Local.productReduer.LocalStorageData
  );
  console.log(lcoalvalue, "Local storage");

  useEffect(() => {
    // setLocalstorageData(JSON.parse(localStorage.getItem("CartItem")) || []);
  }, []);

  console.log(localStorageData);
  console.log(quantity);
  return (
    <div>
      <h1>Cart Page</h1>
      <div className="body">
        <div className="main-sec">
          {localStorageData.length > 0
            ? localStorageData.map((ele) => (
                <div className="cart" key={Math.random()}>
                  <div className="img-c">
                    <img src={ele.url} alt="img" />
                  </div>

                  <div className="con">
                    <p>{ele.name}</p>
                    <p>Rating:-{ele.rating}</p>
                    <div>
                      <button onClick={handleRemove}>-</button>
                      <span>{quantity}</span>
                      <button onClick={handleAdd}>+</button>
                    </div>
                    {/* <p>Price:-${ele.price}</p> */}
                    <p>TotalPrice:-${ele.price * quantity}</p>
                    <button className="btn">Remove</button>
                  </div>
                </div>
              ))
            : "Cart is Empty"}
        </div>
      </div>
    </div>
  );
};

export default Cart;
