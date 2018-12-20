import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Router from "./Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink className="navlink home" to="/">
          Paper.co
        </NavLink>
      </li>
      <li>
        <NavLink className="navlink shop" to="/shop">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink className="navlink cart" to="/cart">
          <FontAwesomeIcon icon="fa shopping-cart" />
          My Cart
        </NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
