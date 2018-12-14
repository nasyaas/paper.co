import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Router from "./Router";

const Navigation = props => (
  <nav>
    <ul>
      <li>
        <NavLink className="navlink" to="/">
          Homepage
        </NavLink>
      </li>
      <li>
        <NavLink className="navlink" to="/shop">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink className="navlink" to="/cart">
          Cart
        </NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
