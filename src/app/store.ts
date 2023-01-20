import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import bookSearchReducer from "../features/bookSearch/bookSearchSlice";

export const store = configureStore({
  reducer: {
    bookSearch: bookSearchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
