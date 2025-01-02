import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/UiSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});
