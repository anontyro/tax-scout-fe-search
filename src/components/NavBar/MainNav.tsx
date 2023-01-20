import styled from "styled-components";
import MainSearch from "../Search/MainSearch";

const MainNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: end;
  width: 100%;
  background-color: #f2f2f2;
  padding: 9px 12px;
`;

const SearchContainer = styled.div``;

const MainNav: React.FC = () => {
  return (
    <MainNavContainer>
      <SearchContainer>
        <MainSearch />
      </SearchContainer>
    </MainNavContainer>
  );
};

export default MainNav;
