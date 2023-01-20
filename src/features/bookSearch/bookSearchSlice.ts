import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { BookItem } from "../../types/OpenLibrary";
import { getBookData, getBookInfoByISBN } from "./bookSearchAPI";

export interface BookSearchState {
  isLoading: boolean;
  books: {
    [key: string]: BookItem;
  };
}

const initialState: BookSearchState = {
  isLoading: false,
  books: {},
};

export const getBookAsync = createAsyncThunk<
  BookItem,
  string,
  { state: RootState }
>("bookSearch/getBookData", async (isbn: string, thunkAPI) => {
  const state = thunkAPI.getState();
  const book = state.bookSearch.books[isbn];

  if (book) {
    return book;
  }

  const bookIsbnData = await getBookInfoByISBN(isbn);

  if (!bookIsbnData) {
    throw new Error("No book data found");
  }

  const data = await getBookData(bookIsbnData);

  return data;
});

export const bookSearchSlice = createSlice({
  name: "bookSearch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload?.isbn_10) {
          state.books[action.payload.isbn_10[0]] = action.payload;
        }
      })
      .addCase(getBookAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default bookSearchSlice.reducer;
