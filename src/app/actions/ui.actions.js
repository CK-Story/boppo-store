import { commonDispatch } from "../utils/common";

export const actionTypes = {
  isLoading: "IS_LOADING",
};

export const updateLoadingState = (state) => (dispatch) => {
  dispatch(commonDispatch(actionTypes.isLoading, state));
};
