import { useRef, useState } from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { usePopper } from "react-popper";
import {
  findCurrentBook,
  getBookAsync,
  isBookLoading,
} from "../../features/bookSearch/bookSearchSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import BookItemResult from "./components/BookItemResult";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
  padding: 0.5rem 1rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  background-color: #e3e3e3;
  border-radius: 2px;
  &:focus {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

const MainSearchResultsContainer = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  padding: 0.2rem;
  width: 100%;
  max-width: 500px;
`;

const BookLoadPlaceholder: React.FC = () => {
  return <div>Loading...</div>;
};

interface MainSearchResultsProps {
  style: React.CSSProperties;
  setReference: (ref: HTMLDivElement | null) => void;
}

const MainSearchResults: React.FC<MainSearchResultsProps> = ({
  style,
  setReference,
}) => {
  const isLoading = useAppSelector(isBookLoading);
  const currentBook = useAppSelector(findCurrentBook);
  return (
    <MainSearchResultsContainer style={style} ref={setReference}>
      {isLoading ? (
        <BookLoadPlaceholder />
      ) : (
        <BookItemResult book={currentBook} />
      )}
    </MainSearchResultsContainer>
  );
};

const MainSearch: React.FC = () => {
  const [isResultsVisible, setIsResultsVisible] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch = useAppDispatch();

  const debouncedDispatch = debounce(
    (val: string) => dispatch(getBookAsync(val)),
    500
  );

  const refDebounce = useRef(debouncedDispatch);
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
  });
  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim().length > 0) {
      setIsResultsVisible(true);
      refDebounce.current(val);
    } else {
      setIsResultsVisible(false);
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchInput
          ref={setReferenceElement}
          value={searchQuery}
          onChange={handleSearchQuery}
          {...attributes.popper}
        />
      </SearchContainer>
      {isResultsVisible && (
        <MainSearchResults
          style={styles.popper}
          setReference={setPopperElement}
        />
      )}
    </>
  );
};

export default MainSearch;
