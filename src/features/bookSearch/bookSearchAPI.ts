import { BookItem, OpenLibraryISBN } from "../../types/OpenLibrary";
import { createBookDataUrl } from "../../utils/bookSearchUtils";

const BOOK_API_URL = {
  GET_BY_ISBN: (isbn: string) =>
    `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json`,
};

export const getBookInfoByISBN = async (
  isbn: string
): Promise<OpenLibraryISBN | null> => {
  const response = await fetch(BOOK_API_URL.GET_BY_ISBN(isbn));
  const data = await response.json();

  if (!data) {
    return null;
  }

  const bookData: OpenLibraryISBN = data[`ISBN:${isbn}`];

  return bookData;
};

export const getBookData = async (
  bookData: OpenLibraryISBN
): Promise<BookItem> => {
  const bookDataUrl = createBookDataUrl(bookData);

  const response = await fetch(bookDataUrl);
  const data = await response.json();

  return data;
};
