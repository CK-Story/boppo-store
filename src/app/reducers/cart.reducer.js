import { actionTypes } from "../actions/cart.actions";

let initialState = { cart: {} };

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.updateCart:
      return { ...state, cart: action.payload };

    case actionTypes.cartValue:
      return { ...state, cartValue: action.payload };

    default:
      return state;
  }
};
