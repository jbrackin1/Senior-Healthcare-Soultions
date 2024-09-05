/** @format */

// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Libre Baskerville', serif;
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.2rem;
  }

  p {
    margin-bottom: .2rem;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;

    &:hover {
      color: #add8e6;
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
      background-color: #add8e6;
    }
  }

  .bg-primary {
    background-color: #2b3a42;
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
