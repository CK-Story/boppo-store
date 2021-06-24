import React, { useEffect, useState } from "react";
import {
  capitalize,
  Grid,
  makeStyles,
  Container,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Breadcrumbs,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getProduct } from "../actions/products.actions";
import { Typography } from "@material-ui/core";
import { Add, ChevronRight, Remove, ShoppingCart } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../actions/cart.actions";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
}));

const ProductDetails = () => {
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const CartReducer = useSelector((state) => state.CartReducer);
  const ProductsReducer = useSelector((state) => state.ProductsReducer);
  const UIReducer = useSelector((state) => state.UIReducer);
  const [details, setDetails] = useState({
    id: 0,
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  useEffect(() => {
    if (ProductsReducer.productDetails) {
      setDetails(ProductsReducer.productDetails);
    }
  }, [ProductsReducer.productDetails]);

  if (UIReducer.isLoading) {
    return (
      <Container maxWidth={"lg"}>
        <div style={{ marginTop: 100, height: "100%", width: "100%" }}>
          <Grid container spacing={5}>
            <Grid item>
              <Skeleton variant="text" width={50} />
            </Grid>
            <Grid item>
              <Skeleton variant="text" width={50} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item sm={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton variant="rect" height={500} width={300} />
              </div>
            </Grid>
            <Grid item sm={8}>
              <Skeleton variant="text" width={200} />
              <Skeleton variant="text" width={400} height={60} />
              <Skeleton variant="text" width={400} />
              <Skeleton variant="text" width={400} />
              <Skeleton variant="text" width={400} />

              <Skeleton variant="text" width={400} height={60} />
              <Skeleton variant="text" width={400} height={60} />
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }

  return (
    <Container maxWidth={"lg"}>
      <div style={{ marginTop: 100, height: "100%", width: "100%" }}>
        <Breadcrumbs separator={<ChevronRight />} style={{ marginBottom: 20 }}>
          <Button onClick={() => history.goBack()} variant="link">
            Products
          </Button>
          <Typography color="textPrimary">{details.title}</Typography>
        </Breadcrumbs>
        <Grid container spacing={10}>
          <Grid item sm={4}>
            <div
              style={{
                display: "flex",
                border: "1px solid grey",
                borderRadius: 5,
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={details.image || ""}
                className={classes.image}
                alt={details.title}
              />
            </div>
          </Grid>
          <Grid item sm={8}>
            <div>
              <Typography variant="subtitle2" style={{ color: "grey" }}>
                {capitalize(details.category)}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {capitalize(details.title)}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {capitalize(details.description)}
              </Typography>
              <Typography variant="h5" component={"h1"} gutterBottom>
                ₹ {details.price}
              </Typography>

              <Grid container spacing={5} alignItems="flex-end">
                {CartReducer.cart[details.id] ? (
                  <>
                    <Grid item>
                      <Typography variant="caption">Quantity</Typography>
                      <br />
                      <OutlinedInput
                        margin="dense"
                        value={
                          CartReducer.cart[details.id] &&
                          CartReducer.cart[details.id].quantity
                        }
                        inputProps={{ style: { textAlign: "center" } }}
                        style={{ textAlign: "center", width: 200 }}
                        startAdornment={
                          <InputAdornment>
                            <IconButton
                              aria-label="remove"
                              size="small"
                              onClick={() =>
                                dispatch(decrementQuantity(details))
                              }
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
                              onClick={() =>
                                dispatch(incrementQuantity(details))
                              }
                            >
                              <Add />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                        onClick={() => history.push("/cart")}
                        startIcon={<ShoppingCart />}
                      >
                        Go to cart
                      </Button>
                    </Grid>
                  </>
                ) : (
                  <Grid item>
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      onClick={() => dispatch(addToCart(details))}
                      startIcon={<ShoppingCart />}
                    >
                      Add to cart
                    </Button>
                  </Grid>
                )}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetails;
