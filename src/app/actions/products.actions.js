import api from "../utils/api";
import { commonDispatch } from "../utils/common";
import { updateLoadingState } from "./ui.actions";

export const actionTypes = {
  productsList: "PRODUCTS_LIST",
  productDetails: "PRODUCT_DETAILS",
};

export const getProducts = (params) => (dispatch) => {
  dispatch(updateLoadingState(true));
  return api
    .get("/products", { params })
    .then((res) => {
      let response = [];
      response.push(
        res.data.map((item) => {
          return { ...item, quantity: 0 };
        })
      );
      dispatch(commonDispatch(actionTypes.productsList, ...response));
      dispatch(updateLoadingState(false));
    })
    .catch((err) => console.log("Error", err));
};

export const getProduct = (id) => (dispatch) => {
  dispatch(updateLoadingState(true));
  return api
    .get(`/products/${id}`)
    .then((res) => {
      dispatch(commonDispatch(actionTypes.productDetails, res.data));
      dispatch(updateLoadingState(false));
    })
    .catch((err) => console.log("Error", err));
};
