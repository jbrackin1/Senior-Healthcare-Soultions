/** @format */

// themes/GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import ColorPallet from "./GlobalColors";

const GlobalStyles = createGlobalStyle`
  /* Reset some basic elements */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Set global font and background */
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  button {
    font-family: inherit;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.backgroundAlt};
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  /* Utility classes for background colors */
  .bg-primary {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .bg-accent {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  .bg-secondary {
    background-color: ${({ theme }) => theme.colors.secondaryPrimary};
  }

  .bg-background {
    background-color: ${({ theme }) => theme.colors.background};
  }

  .bg-background-alt {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }

  /* Utility classes for text colors */
  .text-primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  .text-accent {
    color: ${({ theme }) => theme.colors.accent};
  }

  .text-secondary {
    color: ${({ theme }) => theme.colors.secondaryPrimary};
  }
`;

export default GlobalStyles;
