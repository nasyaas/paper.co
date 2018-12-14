import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shoppage";
import CartPage from "./pages/cartpage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/cart" component={CartPage} />
  </Switch>
);

export default Router;
