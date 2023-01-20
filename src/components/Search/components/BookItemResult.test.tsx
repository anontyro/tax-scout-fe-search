import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { mockBookData } from "../../../testing/mocks/mockBookData";
import BookItemResult from "./BookItemResult";

afterEach(cleanup);

it("will correctly render book not found when no book passed in", () => {
  render(<BookItemResult book={undefined} />);
  expect(screen.getByText("Book not found")).toBeInTheDocument();
});

it("will correctly render the book when passed in", () => {
  const book = mockBookData();

  render(<BookItemResult book={book} />);

  expect(screen.getByText(book.title)).toBeInTheDocument();
});
