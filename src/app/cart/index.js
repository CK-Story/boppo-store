import {
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartItem from "./cart-item";

const Cart = () => {
  const history = useHistory();
  const CartReducer = useSelector((state) => state.CartReducer);

  const getCartTotal = () => {
    let temp = 0;
    Object.keys(CartReducer.cart).map((item) => {
      temp = temp + Number(CartReducer.cart[item].itemTotal);
      console.log("item", CartReducer.cart[item]);
    });
    return temp.toFixed(2);
  };
  return (
    <Container>
      <div style={{ marginTop: 100 }}>
        <Breadcrumbs separator={<ChevronRight />}>
          <Button onClick={() => history.push("/products")} variant="text">
            Products
          </Button>
          <Typography>Cart</Typography>
        </Breadcrumbs>
        <Typography variant="h4">Cart Details</Typography>
        {Object.keys(CartReducer.cart).length ? (
          <Grid container spacing={5}>
            <Grid item sm={8}>
              {Object.keys(CartReducer.cart).map((item) => {
                return <CartItem item={CartReducer.cart[item]} key={item.id} />;
              })}
            </Grid>
            <Grid item sm={4}>
              <Divider orientation="vertical" flexItem />
              <Typography variant="h5">Cart Total:</Typography>
              <Divider />
              <Typography variant="body1">
                Price ({Object.keys(CartReducer.cart).length} items) : ₹{" "}
                {getCartTotal()}
              </Typography>
              <Typography variant="body1">Discount : 0%</Typography>
              <Typography variant="body1">Delivery Charges : 0</Typography>
              <Divider />
              <Typography variant="h5">
                Grand Total : ₹ {getCartTotal()}{" "}
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <>
            <img
              src={
                "https://www.pngfind.com/pngs/m/272-2727925_continue-shopping-empty-cart-png-transparent-png.png"
              }
              height={400}
            />
            <Typography variant="h5">Uh-Oh! Your cart is empty.</Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ChevronLeft />}
              onClick={() => history.push("/")}
            >
              Go Shop
            </Button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Cart;
