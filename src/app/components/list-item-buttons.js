import React from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../actions/cart.actions";
import { useHistory } from "react-router-dom";

const ListItemActionButtons = ({ itemDetails }) => {
  const history = useHistory();

  const CartReducer = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const renderQuantity = Object.keys(CartReducer.cart).includes(
    itemDetails.id + ""
  ) ? (
    <OutlinedInput
      margin="dense"
      inputProps={{ style: { textAlign: "center" } }}
      value={CartReducer.cart[itemDetails.id].quantity}
      style={{ textAlign: "center" }}
      startAdornment={
        <InputAdornment>
          <IconButton
            aria-label="remove"
            size="small"
            onClick={() => dispatch(decrementQuantity(itemDetails))}
          >
            <Remove />
          </IconButton>
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment>
          <IconButton
            aria-label="add"
            size="small"
            onClick={() => dispatch(incrementQuantity(itemDetails))}
          >
            <Add />
          </IconButton>
        </InputAdornment>
      }
    />
  ) : (
    <Button
      color="primary"
      variant="contained"
      onClick={() => dispatch(addToCart(itemDetails))}
    >
      Add to cart
    </Button>
  );

  return (
    <Grid container spacing={3} alignItems="center" justify="center">
      <Grid item sm={6}>
        {renderQuantity}
      </Grid>
      {Object.keys(CartReducer.cart).includes(itemDetails.id + "") ? (
        <Grid item sm={6}>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => history.push("/cart")}
          >
            Go to cart
          </Button>
        </Grid>
      ) : null}

      <Grid item sm={6}></Grid>
    </Grid>
  );
};

export default ListItemActionButtons;
