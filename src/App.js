import React from "react";
import Layout from "layout";
import Navigation from "routes";
import theme from "config/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: white;
    box-sizing: border-box;
  }

  html, body {
    font-weight: 400;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
    background-color: ${theme.colors.background}
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #1A1E2B;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Navigation />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
