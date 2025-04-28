/** @format */

// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Box Sizing Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Layout */
  html, body, #root {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text || "#333"};
    background-color: ${({ theme }) => theme.colors.background || "#fff"};
    font-size: 1.2rem; /* Upgraded for older users */
    line-height: 1.6;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Baskerville', serif;
    color: ${({ theme }) => theme.colors.accent || "#0056b3"};
    margin-bottom: 1rem; /* Bigger margin for breathing room */
    line-height: 1.3;
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }
  h5 { font-size: 1.25rem; }
  h6 { font-size: 1rem; }

  /* Paragraphs */
  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.text || "#007BFF"};
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #add8e6;
      text-decoration: underline;
    }
  }

  /* Buttons */
  button {
    font-family: inherit;
    background-color: ${({ theme }) => theme.colors.primary || "#007BFF"};
    color: ${({ theme }) => theme.colors.textOnPrimary || "#ffffff"};
    border: none;
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #add8e6;
      color: ${({ theme }) => theme.colors.backgroundAlt || "#fff"};
    }
  }

  /* Reusable Background Classes */
  .bg-primary {
    background-color: ${({ theme }) => theme.colors.primary || "#007BFF"};
  }

  .bg-accent {
    background-color: ${({ theme }) => theme.colors.accent || "#0056b3"};
  }

  .bg-secondary {
    background-color: ${({ theme }) =>
			theme.colors.secondaryPrimary || "#6c757d"};
  }

  .bg-background {
    background-color: ${({ theme }) => theme.colors.background || "#ffffff"};
  }

  .bg-background-alt {
    background-color: ${({ theme }) => theme.colors.backgroundAlt || "#f8f9fa"};
  }

  /* Reusable Text Color Classes */
  .text-primary {
    color: ${({ theme }) => theme.colors.primary || "#007BFF"};
  }

  .text-accent {
    color: ${({ theme }) => theme.colors.accent || "#0056b3"};
  }

  .text-secondary {
    color: ${({ theme }) => theme.colors.secondaryPrimary || "#6c757d"};
  }
`;

export default GlobalStyles;
