import React from "react";
import Cart from "../features/cart";
import "./cartpage.css";

// import Router from "../Router";

export default function CartPage(props) {
  return (
    <div>
      <div className="container3">
        <h3>My Cart</h3>
        <Cart />
        {/* <button className="checkoutbtn" to="/checkout">
        Checkout
      </button> */}
      </div>
      <footer> Created by Nasya Acosta Smith </footer>
    </div>
  );
}
