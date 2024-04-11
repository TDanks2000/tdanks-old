import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body, html {
      background-color: ${({ theme }) => theme.base.bg};
      color: ${({ theme }) => theme.text.primary};
      font-family: 'Open Sans', sans-serif;
      overflow: hidden;
    }
    body { 
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100vh;
    }
`;

export default GlobalStyle;
