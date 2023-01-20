import { BookItem } from "../../../types/OpenLibrary";
import styled from "styled-components";

const BookItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const BookItemContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const BookItemFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  height: 8rem;
`;
interface BookItemResult {
  book: BookItem | undefined;
}

const BookItemResult: React.FC<BookItemResult> = ({ book }) => {
  if (!book) {
    return <BookItemContainer>Book not found</BookItemContainer>;
  }

  return (
    <BookItemContainer>
      <BookItemContentContainer>
        <BookImage src={book.thumbnail_url} />
        <BookItemBody>
          <h3>{book.title}</h3>
          <p>{book.by_statement}</p>
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
