import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((cart) => cart.cart.items);
  return <div></div>;
};

export default Cart;
