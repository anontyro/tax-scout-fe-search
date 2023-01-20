import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { BookItem } from "../../types/OpenLibrary";
import { makeAmazonUrl } from "../../utils/bookSearchUtils";
import { getBookData, getBookInfoByISBN } from "./bookSearchAPI";

export interface BookSearchState {
  isLoading: boolean;
  currentBook?: string;
  books: {
    [key: string]: BookItem;
  };
}

const initialState: BookSearchState = {
  isLoading: false,
  currentBook: undefined,
  books: {},
};

export const getBookAsync = createAsyncThunk<
  BookItem,
  string,
  { state: RootState }
>("bookSearch/getBookData", async (isbn: string, thunkAPI) => {
  const state = thunkAPI.getState();
  const book = state.bookSearch.books[isbn];
  thunkAPI.dispatch(clearCurrentBook());

  if (book) {
    return book;
  }

  const bookIsbnData = await getBookInfoByISBN(isbn);

  if (!bookIsbnData) {
    throw new Error("No book data found");
  }

  const data = await getBookData(bookIsbnData);

  return {
    ...data,
    thumbnail_url: bookIsbnData.thumbnail_url,
    amazon_url: makeAmazonUrl(isbn),
  };
});

export const bookSearchSlice = createSlice({
  name: "bookSearch",
  initialState,
  reducers: {
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
    clearCurrentBook: (state) => {
      state.currentBook = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload?.isbn_10) {
          state.currentBook = action.payload.isbn_10[0];
          state.books[action.payload.isbn_10[0]] = action.payload;
        }
      })
      .addCase(getBookAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const isBookLoading = (state: RootState) => state.bookSearch.isLoading;
export const findCurrentBook = (state: RootState) => {
  const currentBook = state.bookSearch.currentBook;
  return currentBook ? state.bookSearch.books[currentBook] : undefined;
};
export const { setCurrentBook, clearCurrentBook } = bookSearchSlice.actions;

export default bookSearchSlice.reducer;
