import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
    &::-webkit-scrollbar {
      display: block;
      width: 4px;
    }
        
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme["gray-700"]};
      border-radius: 5px;
      height: 10px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 5rem; 
    }

    &::-webkit-scrollbar-track-piece:start {
        background: transparent;
        margin-top: 5rem;
    }
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => props.theme["background-default"]};
    color: ${(props) => props.theme["main-text-color"]}
  }
  
  body, button, input, textarea {
    font-family: 'JetBrains Mono', monospace;
    font-weight: 400;
    font-size: 1rem;
  }
`;
