// src/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&family=Open+Sans:wght@300&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #111;
    color: #fff;
    line-height: 1.4; /* Reduced line-height for a more compact look */
    font-size: 0.9rem; /* Slightly reduced font size */
  }

  h1, h2, h3 {
    font-family: 'Big Shoulders Display', cursive;
    margin-bottom: 1rem;
    color: #fff;
    font-weight: 800; /* Extra bold */
    text-align: left;
  }

  p {
    margin: 0 0 1rem 0;
    color: #aaa;
  }

  a {
    color: #fff; /* Change link color to white */
    text-decoration: none;
  }

  a:hover {
    color: #ddd; /* Slightly lighter on hover */
  }

  * {
    box-sizing: border-box;
  }
    
`;
