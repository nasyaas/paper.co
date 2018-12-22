import React from "react";
import "./shoppage.css";

import ProductListing from "../features/product-listing";

import data from "../data/products.json";

export default function ShopPage(props) {
  return (
    <div className="container2">
      <h3>SHOP</h3>
      <ProductListing products={data.products} />
    </div>
  );
}
