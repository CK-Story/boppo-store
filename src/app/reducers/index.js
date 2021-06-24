import { combineReducers } from "redux";
import { CartReducer } from "./cart.reducer";
import { LoginReducer } from "./login.reducer";
import { ProductsReducer } from "./products.reducer";
import { UIReducer } from "./ui.reducer";

export const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  UIReducer: UIReducer,
  ProductsReducer: ProductsReducer,
  CartReducer: CartReducer
});
