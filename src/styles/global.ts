import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    boz-sizing: border-box;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => props.theme["background-default"]};
    color: ${(props) => props.theme["main-text-color"]}
  }
  
  body, button, input, textarea {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
