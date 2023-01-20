export interface OpenLibraryISBN {
  bib_key: string;
  info_url: string;
  preview: string;
  preview_url: string;
  thumbnail_url: string;
}

export interface OpenLibraryISBNResponse {
  [key: string]: OpenLibraryISBN;
}
interface BookObjectKeys {
  key: string;
}

interface BookIdentifiers {
  librarything: string[];
  project_gutenberg: string[];
  goodreads: string[];
}

interface BookTimeItem {
  type: "/type/datetime";
  value: string;
}

export interface BookItem {
  publishers: string[];
  number_of_pages: number;
  isbn_10: string[];
  subject_place: string[];
  pagination: string;
  covers: number[];
  lc_classifications: string[];
  key: string;
  authors: BookObjectKeys[];
  publish_places: string[];
  genres: string[];
  classifications: {};
  source_records: string[];
  title: string;
  lccn: string[];
  notes: string;
  identifiers: BookIdentifiers;
  languages: BookObjectKeys[];
  dewey_decimal_class: string[];
  subjects: string[];
  publish_date: string;
  publish_country: string;
  by_statement: string;
  oclc_numbers: string[];
  works: BookObjectKeys[];
  type: BookObjectKeys;
  ocaid: string;
  latest_revision: number;
  revision: number;
  created: BookTimeItem;
  last_modified: BookTimeItem;
  thumbnail_url?: string;
  amazon_url?: string;
}
