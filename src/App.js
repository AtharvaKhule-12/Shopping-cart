import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCart } from "./store/cart-actions";

let firstRender = true;

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.open)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      return;
    }
    dispatch(sendCart(cart))
  }, [cart.itemsList, cart.totalQuantity])

  return (
    <div className="App">
      {open && <Notification />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
