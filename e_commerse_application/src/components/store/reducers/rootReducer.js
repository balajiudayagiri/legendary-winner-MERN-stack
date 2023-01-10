import { combineReducers } from "redux";
import { reducer } from "./reducers";
import userReducer from "./userReducer";
import { add_to_cart_Reducer } from "./cartReducer";

export const rootReducer = combineReducers({
  reducer,
  userReducer,
  add_to_cart_Reducer,
});
