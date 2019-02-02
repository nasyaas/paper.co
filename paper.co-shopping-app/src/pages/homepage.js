import React from "react";
import "./homepage.css";

export default function ShopPage(props) {
  return (
    <div className="container">
      <div id="row">
        <img
          id="img"
          src="https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1893&q=80"
          alt="thumbtacks and paperclips"
        />
        <div id="text">
          <h2>QUALITY</h2>
          <p>Cras pulvinar mattis nunc sed blandit libero volutpat</p>
        </div>
      </div>

      <div id="row">
        <div id="text">
          <h2>DESIGN</h2>
          <p>Maecenas ultricies mi eget mauris pharetra et ultrices neque</p>
        </div>

        <img
          id="img"
          src="https://images.unsplash.com/photo-1515709969750-23a5a6b47a5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
          alt="thumbtacks and paperclips"
        />
      </div>

      <div id="row">
        <img
          id="img"
          src="https://images.unsplash.com/photo-1518665750801-883c188a660d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
          alt="thumbtacks and paperclips"
        />
        <div id="text">
          <h2>SIMPLICITY</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <footer> Created by Nasya Acosta Smith </footer>
    </div>
  );
}
