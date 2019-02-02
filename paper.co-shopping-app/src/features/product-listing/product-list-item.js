import React from "react";
import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <img
        className="product-img"
        height={125}
        src={`/products/${props.product.image}`}
        alt="Product"
      />
      <h4>{props.product.name}</h4>
      <div className="price">${props.product.price}</div>
      <div />
      <AddBtn
        className="addBtn"
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
