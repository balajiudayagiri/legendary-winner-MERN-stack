import { combineReducers } from "redux";
import { reducer } from "./reducers";
import userReducer from "./userReducer";
// import { themeReducer } from "./themeReducer";

export const rootReducer = combineReducers({
  reducer,
  userReducer,
  // themeReducer,
});
