import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui_slice";
export const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});
