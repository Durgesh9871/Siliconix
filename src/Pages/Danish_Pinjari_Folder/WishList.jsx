import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";



function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  function addItem(item) {
    // add the item to the cart, with a quantity of 1
    setCartItems([...cartItems, { item, quantity: 1 }]);
  }

  function removeItem(item) {
    // remove the item from the cart
    setCartItems(cartItems.filter((cartItem) => cartItem.item !== item));
  }

  function increaseQuantity(item) {
    // increment the quantity of the specified item
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.item === item ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  }

  function decreaseQuantity(item) {
    // decrement the quantity of the specified item, or remove the item if the quantity is 1
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.item === item) {
          if (cartItem.quantity > 1) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return null;
          }
        } else {
          return cartItem;
        }
      }).filter((cartItem) => cartItem !== null)
    );
  }

  return (
    <Box>
      {cartItems.map((cartItem) => (
        <Box key={cartItem.item.id}>
          {cartItem.item.name} ({cartItem.quantity})
          <Button onClick={() => removeItem(cartItem.item)}>Remove</Button>
          <Button onClick={() => increaseQuantity(cartItem.item)}>+</Button>
          <Button onClick={() => decreaseQuantity(cartItem.item)}>-</Button>
        </Box>
      ))}
      <Text>
        Total: $
        {cartItems.reduce((total, cartItem) => {
          return total + cartItem.item.price * cartItem.quantity;
        }, 0)}
      </Text>
    </Box>
  );
}

export default CartPage;