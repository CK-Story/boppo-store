import { commonDispatch } from "../utils/common";

export const actionTypes = {
  updateCart: "UPDATE_CART",
  cartValue: "CART_VALUE",
};
export const updateCart = (product, quantity) => (dispatch, getState) => {
  let state = getState();
  let { CartReducer } = state;
  let temp = { ...CartReducer.cart };
  if (quantity <= 0) {
    delete temp[product.id];
  } else {
    temp[product.id] = {
      ...product,
      quantity: quantity,
      itemTotal: Number(product.price) * Number(quantity),
    };
  }
  dispatch(commonDispatch(actionTypes.updateCart, temp));
};

export const addToCart = (product) => (dispatch) => {
  dispatch(updateCart(product, 1));
};

export const deleteCartItem = (id) => (dispatch, getState) => {
  let state = getState();
  let { CartReducer } = state;
  let temp = { ...CartReducer.cart };
  delete temp[id];
  dispatch(commonDispatch(actionTypes.updateCart, temp));
};

export const incrementQuantity = (product) => (dispatch, getState) => {
  let state = getState();
  let productItem = state["CartReducer"].cart[product.id];
  dispatch(updateCart(productItem, parseInt(productItem.quantity) + 1));
};

export const decrementQuantity = (product) => (dispatch, getState) => {
  let state = getState();
  let productItem = state["CartReducer"].cart[product.id];
  dispatch(updateCart(productItem, parseInt(productItem.quantity) - 1));
};
