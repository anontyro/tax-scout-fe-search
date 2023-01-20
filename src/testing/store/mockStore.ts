import { configureStore } from "@reduxjs/toolkit";
import bookSearchReducer from "../../features/bookSearch/bookSearchSlice";

export const mockStore = () =>
  configureStore({
    reducer: {
      bookSearch: bookSearchReducer,
    },
  });
