import React from "react";
import Cart from "../features/cart";
import "./cartpage.css";

// import Router from "../Router";

export default function CartPage(props) {
  return (
    <div className="container2">
      <h2>Cartpage</h2>
      <Cart />
      {/* <button className="checkoutbtn" to="/checkout">
        Checkout
      </button> */}
    </div>
  );
}
