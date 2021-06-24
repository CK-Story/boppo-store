import {
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { Add, Delete, Remove } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteCartItem,
  incrementQuantity,
} from "../actions/cart.actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const CartReducer = useSelector((state) => state.CartReducer);
  console.log("CartItem", item);
  return (
    <Card style={{ padding: 20 }} variant="outlined">
      <Grid container spacing={4}>
        <Grid item>
          <img src={item.image} height={120} />
        </Grid>

        <Grid item style={{ width: "80%" }}>
          <Typography variant="caption">{item.category}</Typography>

          <Typography variant="h5">{item.title}</Typography>
          <Typography variant="h6">₹ {item.price}</Typography>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <OutlinedInput
                margin="dense"
                inputProps={{ style: { textAlign: "center" } }}
                value={CartReducer.cart[item.id].quantity}
                style={{ textAlign: "center" }}
                startAdornment={
                  <InputAdornment>
                    <IconButton
                      aria-label="remove"
                      size="small"
                      onClick={() => dispatch(decrementQuantity(item))}
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
                      onClick={() => dispatch(incrementQuantity(item))}
                    >
                      <Add />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item>
              <Button
                variant="text"
                color="secondary"
                startIcon={<Delete />}
                onClick={() => dispatch(deleteCartItem(item.id))}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;
