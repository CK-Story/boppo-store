import { actionTypes } from "../actions/products.actions";

export const ProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.productsList:
      return { ...state, products: action.payload };

    case actionTypes.productDetails:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};
