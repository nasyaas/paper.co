import React from "react";
import "./homepage.css";

export default function ShopPage(props) {
  return (
    <div className="container">
      <div className="quote">
        <h1> Text</h1>
        <p>Sample text like a quote</p>
      </div>
      <img
        className="img1"
        src="https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1893&q=80"
        alt="thumbtacks and paperclips"
      />
      <div className="text">
        <h2>QUALITY</h2>
        <p>This is sample text describing the product</p>
      </div>

      <div className="text">
        <h2>QUALITY</h2>
        <p>This is sample text describing the product</p>
      </div>

      <img
        className="img2"
        src="https://images.unsplash.com/photo-1515709969750-23a5a6b47a5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
        alt="thumbtacks and paperclips"
      />

      <img
        className="img3"
        src="https://images.unsplash.com/photo-1518665750801-883c188a660d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
        alt="thumbtacks and paperclips"
      />
      <div className="text">
        <h2>QUALITY</h2>
        <p>This is sample text describing the product</p>
      </div>
      <footer> Text 2018 </footer>
    </div>
  );
}
