import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <h1>Hello Vite React Starter</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
