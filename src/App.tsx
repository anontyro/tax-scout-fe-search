import styled from "styled-components";
import MainNav from "./components/NavBar/MainNav";

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
      <MainNav />
    </MainContentContainer>
  );
};

export default App;
