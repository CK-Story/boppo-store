import { actionTypes } from "../actions/login.actions";

let initialState = {};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.isLoggedIn:
      return { ...state, isLoggedIn: action.payload };

    case actionTypes.logOut:
      return { ...state, logOut: action.payload };

    default:
      return state;
  }
};
