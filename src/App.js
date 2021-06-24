import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./app/login";
import Products from "./app/products";
import Header from "./app/components/header";
import ProductDetails from "./app/products/product-details";
import Cart from "./app/cart";
import AppRoute from "./AppRoute";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/login" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/products" />} />
        <AppRoute
          isPrivate={true}
          exact
          path="/products"
          component={Products}
        />
        <AppRoute
          exact
          isPrivate={true}
          path="/products/:id"
          component={ProductDetails}
        />
        <AppRoute exact isPrivate={true} path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
