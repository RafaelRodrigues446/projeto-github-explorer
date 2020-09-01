import { createGlobalStyle } from 'styled-components';

import githubbackground from '../assets/image-background.svg';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f0f0f5 url(${githubbackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
    font: 16px 'Roboto', sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyle;
