// src/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #111;
    color: #eaeaea;
    line-height: 1.6;
  }

  h1, h2, h3 {
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    margin: 0 0 1rem 0;
    color: #aaa;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
  }

  * {
    box-sizing: border-box;
  }
`;
