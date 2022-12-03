import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  let total = 0;
  const itemslist = useSelector(state => state.cart.itemsList)
  const show_Cart = useSelector(state => state.cart.showCart)

  itemslist.forEach(element => {
    total += element.totalPrice;
  });

  // console.log(total);
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {show_Cart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
