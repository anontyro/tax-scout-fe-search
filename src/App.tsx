import styled from "styled-components";
import MainSearch from "./components/Search/MainSearch";

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <MainContentContainer>
      <MainSearch />
    </MainContentContainer>
  );
};

export default App;
