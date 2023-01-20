import { BookItem } from "../../types/OpenLibrary";

export const mockBookData = (override?: Partial<BookItem>): BookItem => ({
  publishers: ["Signet Classic"],
  number_of_pages: 216,
  isbn_10: ["0451526538"],
  subject_place: ["Mississippi River Valley", "Missouri"],
  pagination: "xxi, 216 p. ;",
  covers: [11403183],
  lc_classifications: ["PS1306 .A1 1997", "PS1306.A1 1997"],
  key: "/books/OL1017798M",
  authors: [
    {
      key: "/authors/OL18319A",
    },
  ],
  publish_places: ["New York"],
  genres: ["Fiction."],
  classifications: {},
  source_records: [
    "marc:marc_records_scriblio_net/part25.dat:213801824:997",
    "marc:marc_loc_updates/v40.i23.records.utf8:2463307:1113",
    "amazon:0451526538",
    "marc:marc_loc_2016/BooksAll.2016.part25.utf8:119958799:1113",
    "ia:adventuresoftoms0000twai_x3x4",
    "bwb:9780451526533",
  ],
  title: "The adventures of Tom Sawyer",
  lccn: ["96072233"],
  notes: "Includes bibliographical references (p. 213-216).",
  identifiers: {
    librarything: ["2236"],
    project_gutenberg: ["74"],
    goodreads: ["1929684"],
  },
  languages: [
    {
      key: "/languages/eng",
    },
  ],
  dewey_decimal_class: ["813/.4"],
  subjects: [
    "Sawyer, Tom (Fictitious character) -- Fiction",
    "Runaway children -- Fiction",
    "Child witnesses -- Fiction",
    "Boys -- Fiction",
    "Mississippi River Valley -- Fiction",
    "Missouri -- Fiction",
  ],
  publish_date: "1997",
  publish_country: "nyu",
  by_statement: "Mark Twain ; with an introduction by Robert S. Tilton.",
  oclc_numbers: ["36792831"],
  works: [
    {
      key: "/works/OL53919W",
    },
  ],
  type: {
    key: "/type/edition",
  },
  ocaid: "adventuresoftoms0000twai_x3x4",
  latest_revision: 14,
  revision: 14,
  created: {
    type: "/type/datetime",
    value: "2008-04-01T03:28:50.625462",
  },
  last_modified: {
    type: "/type/datetime",
    value: "2021-10-08T20:02:44.638815",
  },
  ...override,
});
