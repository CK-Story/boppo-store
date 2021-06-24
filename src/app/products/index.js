import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProductDetails from "./product-details";
import ProductsContainer from "./product-list-container";

const Products = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={ProductsContainer} />
      <Route path={path + "/:id"} component={ProductDetails} />
    </Switch>
  );
};

export default Products;
