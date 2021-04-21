import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    overflow:hidden;
  }

  body {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.background};
    color:  ${({ theme }) => theme.text};
    font-family: Arial;

  }

  *:focus {
    outline:none;
  }
`;
