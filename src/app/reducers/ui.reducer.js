import { actionTypes } from "../actions/ui.actions";

let initialState = {
  isLoading: true,
};
export const UIReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.isLoading:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};
