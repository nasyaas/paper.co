import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import CartPage from "./pages/cartpage";
import CheckoutPage from "./pages/checkoutpage";
import OrdersPage from "./pages/orderspage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/checkout" component={CheckoutPage} />
    <Route exact path="/orders/:id" component={OrdersPage} />
  </Switch>
);

export default Router;
