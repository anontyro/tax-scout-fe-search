import {
  mockISBNData,
  mockISBNDataResponse,
} from "../testing/mocks/mockISBNData";
import {
  createBookDataUrl,
  extractDataFromOpenLibraryISBN,
} from "./bookSearchUtils";

describe("bookSearchUtils", () => {
  describe("extractDataFromOpenLibraryISBN", () => {
    it("will correctly extract the data via the key", () => {
      const data = mockISBNDataResponse();
      const expected = mockISBNData();
      const output = extractDataFromOpenLibraryISBN(data);

      expect(output).toEqual(expected);
    });
    it("will return undefined when no data", () => {
      const data = {};
      const output = extractDataFromOpenLibraryISBN(data);

      expect(output).toBeUndefined();
    });
  });
  describe("createBookDataUrl", () => {
    it("will correctly return the string for the book data url", () => {
      const data = mockISBNData();

      const output = createBookDataUrl(data);

      expect(output).toBe("https://openlibrary.org/books/OL1017798M.json");
    });
  });
});
