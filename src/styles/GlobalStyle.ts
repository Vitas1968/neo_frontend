import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    color-scheme: light;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    color: #1f2937;
    background-color: #ffffff;
    font-family: Arial, sans-serif;
  }

  #root {
    min-height: 100vh;
  }

  a {
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }
`;
