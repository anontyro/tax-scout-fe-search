import styled from "styled-components";
import {
  AnimatedPlaceholder,
  StaticPlaceholder,
} from "../../Placeholders/Placeholders";

const BookLoadContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
`;
const BookLoadContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
`;

const BookPlaceholderImage = styled(StaticPlaceholder)`
  flex-shrink: 0;
`;

const BookLoadPlaceholder: React.FC = () => (
  <BookLoadContainer>
    <BookPlaceholderImage width="72px" height="72px" backgroundColor="#fff" />
    <BookLoadContentContainer>
      <AnimatedPlaceholder marginBottom="15px" />
      <AnimatedPlaceholder height="9px" width="60%" />
      <AnimatedPlaceholder height="9px" width="60%" />
      <AnimatedPlaceholder height="9px" width="30%" />
    </BookLoadContentContainer>
  </BookLoadContainer>
);

export default BookLoadPlaceholder;
