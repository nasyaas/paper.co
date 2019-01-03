import React from "react";
import "./add-btn.css";

export default function AddButton(props) {
  return (
    <button onClick={() => props.addToCart(props.product)}>
      Add to Cart ({(props.cartItem && props.cartItem.quantity) || 0})
    </button>
  );
}
