import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Delius&display=swap');  
body {
    margin: 0;
    font-family: 'Delius', cursive;
    background-color: #0E0E0E;
  }
  a {
    text-decoration: none;
    color: #390007;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default GlobalStyle;