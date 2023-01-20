import {
  OpenLibraryISBN,
  OpenLibraryISBNResponse,
} from "../../types/OpenLibrary";

export const mockISBNDataResponse = (
  overrides?: Partial<OpenLibraryISBN>
): OpenLibraryISBNResponse => ({
  [`ISBN:${overrides?.bib_key ?? "0451526538"}`]: {
    bib_key: "ISBN:0451526538",
    info_url:
      "https://openlibrary.org/books/OL1017798M/The_adventures_of_Tom_Sawyer",
    preview: "borrow",
    preview_url: "https://archive.org/details/adventuresoftoms0000twai_x3x4",
    thumbnail_url: "https://covers.openlibrary.org/b/id/11403183-S.jpg",
    ...overrides,
  },
});

export const mockISBNData = (
  overrides?: Partial<OpenLibraryISBN>
): OpenLibraryISBN => ({
  bib_key: "ISBN:0451526538",
  info_url:
    "https://openlibrary.org/books/OL1017798M/The_adventures_of_Tom_Sawyer",
  preview: "borrow",
  preview_url: "https://archive.org/details/adventuresoftoms0000twai_x3x4",
  thumbnail_url: "https://covers.openlibrary.org/b/id/11403183-S.jpg",
  ...overrides,
});
