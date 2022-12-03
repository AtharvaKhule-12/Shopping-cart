import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch()
  // console.log(quantity);
  const showCartHandler = () => {
    dispatch(cartActions.setShowCart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCartHandler}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
