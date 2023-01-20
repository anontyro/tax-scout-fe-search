import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import MockReduxProvider from "../../testing/store/MockReducProvider";
import { mockStore } from "../../testing/store/mockStore";
import MainSearch from "./MainSearch";
import * as bookSearchApi from "../../features/bookSearch/bookSearchAPI";
import { mockISBNData } from "../../testing/mocks/mockISBNData";
import { mockBookData } from "../../testing/mocks/mockBookData";

afterEach(cleanup);

it("should correctly render the main search component", () => {
  const store = mockStore();

  render(
    <MockReduxProvider reduxStore={store}>
      <MainSearch />
    </MockReduxProvider>
  );

  const searchInput = screen.getByTestId("search-input");
  expect(searchInput).toBeInTheDocument();
});

it("should correctly render the search results when query added", async () => {
  const store = mockStore();
  const book = mockBookData();

  jest.spyOn(bookSearchApi, "getBookInfoByISBN").mockImplementation(() =>
    Promise.resolve({
      ...mockISBNData(),
    })
  );

  jest.spyOn(bookSearchApi, "getBookData").mockImplementation(() =>
    Promise.resolve({
      ...book,
    })
  );

  render(
    <MockReduxProvider reduxStore={store}>
      <MainSearch />
    </MockReduxProvider>
  );

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "test" } });

  await waitFor(() => {
    expect(screen.getByText(book.title)).toBeInTheDocument();
  });
});

it("should correctly render book not found when no book", async () => {
  const store = mockStore();

  jest
    .spyOn(bookSearchApi, "getBookInfoByISBN")
    .mockImplementation(() => Promise.resolve(null));

  render(
    <MockReduxProvider reduxStore={store}>
      <MainSearch />
    </MockReduxProvider>
  );

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, { target: { value: "test" } });

  await waitFor(() => {
    expect(screen.getByText("Book not found")).toBeInTheDocument();
  });
});
