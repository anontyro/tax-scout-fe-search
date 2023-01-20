import styled from "styled-components";

interface BookTextPlaceHolderProps {
  width?: string;
  height?: string;
  marginBottom?: string;
  backgroundColor?: string;
}

export const StaticPlaceholder = styled.div`
  width: ${(props: BookTextPlaceHolderProps) => props.width || "100%"};
  height: ${(props: BookTextPlaceHolderProps) => props.height || "18px"};
  margin-bottom: ${(props: BookTextPlaceHolderProps) =>
    props.marginBottom || "0.5rem"};
  background-color: ${(props: BookTextPlaceHolderProps) =>
    props.backgroundColor || "#c4c4c4"};
`;

export const AnimatedPlaceholder = styled(StaticPlaceholder)`
  animation: pulse 1.5s infinite;
  @keyframes pulse {
    0% {
      background-color: #c4c4c4;
    }
    25% {
      background-color: #b9b9b9;
    }
    50% {
      background-color: #9d9d9d;
    }
    75% {
      background-color: #b9b9b9;
    }
    100% {
      background-color: #c4c4c4;
    }
  }
`;
