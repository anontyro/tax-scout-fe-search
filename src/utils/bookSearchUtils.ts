import { OpenLibraryISBN, OpenLibraryISBNResponse } from "../types/OpenLibrary";

export const extractDataFromOpenLibraryISBN = (
  resp: OpenLibraryISBNResponse
) => {
  const isbnKey = Object.keys(resp)[0];
  return resp[isbnKey];
};

export const createBookDataUrl = (openLibraryISBN: OpenLibraryISBN) => {
  const baseUrl = openLibraryISBN.info_url.split(/([^\/]*)$/)[0];

  const urlValue = baseUrl.substring(0, baseUrl.length - 1);

  return `${urlValue}.json`;
};

export const makeAmazonUrl = (isbn: string) => {
  return `https://www.amazon.com/s?k=${isbn}`;
};
