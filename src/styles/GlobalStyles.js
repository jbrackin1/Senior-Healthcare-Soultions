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
  margin: 0;
  padding: 0;
 height: 100%;
  overflow-x: hidden;
}

  body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text || "#333"};
    background-color: ${({ theme }) => theme.colors.background || "#fff"};
    font-size: 1.2rem;
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
    color: ${({ theme }) => theme.colors.text || "#44A7C5"};
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      color: #13343E;
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
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease; /* <-- add transform here */

  &:hover {
    background-color: #add8e6; 
    color: #13343E; 
    transform: scale(1.05);
    font-weight: 600; 
  }
     &:active {
    transform: scale(0.97);
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

   /* 🎯 Responsive fixes */
  @media (max-width: 768px) {
    html, body, #root {
      padding: 0 0.01rem;
    }

    body {
      font-size: 1rem; 
    }

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1rem;
    }
    h6 {
      font-size: 0.9rem;
    }
  }

  /* 🎯 Responsive Table Overflow */
  
    .table-wrapper {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}
tr:active {
  background-color: ${({ theme }) => theme.colors.backgroundHover || "#eef6fb"};
}


  td, th {
    padding: 0.75rem 1rem;
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
    min-width: 100px;
    font-size: 1rem;
  }

  th{ 
  color: #13343E;
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.backgroundAlt || "#f8f9fa"};
  }

  tr:hover {
    background-color: ${({ theme }) =>
			theme.colors.backgroundHover || "#eef6fb"};
  }

td a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.75rem 1rem;
  text-decoration: none;
  font-weight: 600;
  color: #13343E; /* Dark blue */
  background-color: transparent;
  outline: none;
  box-shadow: none;
  border: none; /* Remove underline-like border glitch */
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #d6ecf3; /* deeper soft blue */
    color: #0b1d2a; /* darker for real contrast */
    text-decoration: underline;
  }

  &:focus {
    background-color: #d6ecf3;
    color: #0b1d2a;
    text-decoration: underline;
  }

  &:active {
    background-color: #add8e6;
    color: #0b1d2a;
  }
}

// Toast container 
@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(-20px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
}
    
`;

export default GlobalStyles;
