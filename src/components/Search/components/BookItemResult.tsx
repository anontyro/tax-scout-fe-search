import { BookItem } from "../../../types/OpenLibrary";
import styled from "styled-components";

const BookItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const BookItemContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const BookItemFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  padding-top: 0;
`;

const BookItemBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;

const BookImage = styled.img`
  border: none;
  outline: none;
  flex-grow: 0;
  flex-shrink: 0;
  height: 72px;
  width: 72px;
  margin-right: 18px;
`;

const BookHeader = styled.h3`
  margin: 0 0 0.5rem 0;
`;

const BookParagraph = styled.p`
  margin: 0 0 0.5rem 0;
`;

interface BookItemResultProps {
  book: BookItem | undefined;
}

const bookCover = (coverId: number) =>
  `https://covers.openlibrary.org/b/id/${coverId}.jpg`;

const BookItemResult: React.FC<BookItemResultProps> = ({ book }) => {
  if (!book) {
    return <BookItemContainer>Book not found</BookItemContainer>;
  }

  const coverImg = book?.covers ? bookCover(book?.covers[0]) : undefined;

  return (
    <BookItemContainer>
      <BookItemContentContainer>
        <BookImage
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = book.thumbnail_url ?? "";
          }}
          src={coverImg}
        />
        <BookItemBody>
          <BookHeader>{book.title}</BookHeader>
          <BookParagraph>{book.by_statement}</BookParagraph>
        </BookItemBody>
      </BookItemContentContainer>
      <BookItemFooter>
        <a href={book?.amazon_url} rel="noreferrer" target="_blank">
          Amazon
        </a>
      </BookItemFooter>
    </BookItemContainer>
  );
};

export default BookItemResult;
