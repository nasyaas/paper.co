import React from "react";
import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <img
        height={100}
        src={`/products/${props.product.image}`}
        alt="Product"
      />
      {/* <div>{props.product.description}</div> */}
      <h4>{props.product.name}</h4>
      <div>${props.product.price}</div>
      <div />
      <AddBtn
        cartItem={props.cartItem}
        product={props.product}
        addToCart={props.addToCart}
      />
      {props.cartItem ? (
        <RemoveBtn
          cartItem={props.cartItem}
          product={props.product}
          removeFromCart={props.removeFromCart}
        />
      ) : null}
    </div>
  );
}
