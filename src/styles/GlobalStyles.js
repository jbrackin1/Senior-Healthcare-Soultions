/** @format */
//GlobalStyles.js
// Import necessary packages
import { createGlobalStyle } from "styled-components";

// Define global styles
const GlobalStyles = createGlobalStyle`
  /* CSS Reset (optional) */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Global Typography */
  body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    font-size: 18px; /* Adjust based on your target audience */
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
    margin-bottom: 1.2rem;
  }

  /* Other global styles */
  /* Scrollbar styles, input defaults, button resets, etc. */
`;

export default GlobalStyles;
