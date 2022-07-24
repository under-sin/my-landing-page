import bgAnimation01 from "../../assets/bg-animation-01.svg";
import bgAnimation02 from "../../assets/bg-animation-02.svg";
import bgAnimation03 from "../../assets/bg-animation-03.svg";
import bgAnimation04 from "../../assets/bg-animation-04.svg";
import bgAnimation05 from "../../assets/bg-animation-05.svg";
import styled, { keyframes } from "styled-components";

const bgAnimation = keyframes`  
  0% {
    background-image: url(${bgAnimation01});
  }
  25% {
    background-image: url(${bgAnimation02});
  }
  50% {
    background-image: url(${bgAnimation03});
  }
  75% {
    background-image: url(${bgAnimation04});
  }
  100% {
    background-image: url(${bgAnimation05});
  }
`;

//background-image: url(${bgAnimation05});
export const DefaultLayoutContainer = styled.div`
  padding: 0 7rem;
  margin: 0 auto;
  height: 665px;

  animation: ${bgAnimation} 10s linear infinite forwards alternate;

  background-size: cover;

  display: flex;
  flex-direction: column;
`;