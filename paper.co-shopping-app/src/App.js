import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Router from "./Router";

const Navigation = ({ cart }) => (
  <nav>
    <NavLink className="navlink home" to="/">
      <img className="logo" src={require("./paper.co.png")} alt="logo" />
    </NavLink>
    <ul>
      <li>
        <NavLink className="navlink home" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="navlink shop" to="/shop">
          Shop
        </NavLink>
      </li>

      <li>
        <NavLink className="navlink cart" to="/cart">
          My Cart (
          {cart.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}
          )
        </NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation {...this.props} />
        <Router />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default withRouter(connect(mapStateToProps)(App));
