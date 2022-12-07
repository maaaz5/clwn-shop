import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  body {
    padding: 20px 40px;
    font-family: "Open Sans", sans-serif;
    @media screen and (max-width: 800px) {
      padding:10px;
    }
  }

`;
