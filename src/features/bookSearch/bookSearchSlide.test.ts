import { mockBookData } from "../../testing/mocks/mockBookData";
import bookSearchSlice, {
  BookSearchState,
  clearCurrentBook,
  getBookAsync,
  setCurrentBook,
} from "./bookSearchSlice";
import * as bookSearchApi from "./bookSearchAPI";
import { mockISBNData } from "../../testing/mocks/mockISBNData";
import { configureStore } from "@reduxjs/toolkit";

describe("bookSearch Reducer", () => {
  const initialState: BookSearchState = {
    isLoading: false,
    currentBook: undefined,
    books: {},
  };
  it("should handle initial state", () => {
    expect(bookSearchSlice(undefined, { type: "unknown" })).toEqual({
      isLoading: false,
      currentBook: undefined,
      books: {},
    });
  });

  it("should handle setCurrentBook", () => {
    const actual = bookSearchSlice(initialState, setCurrentBook("123"));
    expect(actual.currentBook).toEqual("123");
  });

  it("should handle clearCurrentBook", () => {
    const actual = bookSearchSlice(initialState, clearCurrentBook());
    expect(actual.currentBook).toEqual(undefined);
  });

  it("should handle getBookAsync.pending", () => {
    const actual = bookSearchSlice(initialState, getBookAsync.pending);
    expect(actual.isLoading).toEqual(true);
  });

  it("should handle getBookAsync.fulfilled", () => {
    const actual = bookSearchSlice(initialState, getBookAsync.fulfilled);
    expect(actual.isLoading).toEqual(false);
  });

  it("should handle adding a new book to the books state", async () => {
    const bookData = mockBookData();
    const store = configureStore({
      reducer: {
        bookSearch: bookSearchSlice,
      },
    });
    const isbn = bookData.isbn_10[0];
    jest.spyOn(bookSearchApi, "getBookInfoByISBN").mockResolvedValue({
      ...mockISBNData(),
    });

    jest.spyOn(bookSearchApi, "getBookData").mockResolvedValue({
      ...bookData,
    });

    await store.dispatch<any>(getBookAsync(isbn));

    const actual = store.getState().bookSearch;
    expect(actual.books[isbn]).toMatchObject(bookData);
  });
});
