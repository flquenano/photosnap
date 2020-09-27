import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html{
    font-size: 10px;
    font-family: 'DM Sans', sans-serif;
    box-sizing: border-box;
  }

  *, *::after, *::before{
    box-sizing: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul,
  li,
  body,
  h1,
  h2,
  h3,
  a,
  p {
    margin: 0;
    padding: 0;
    border: none;
  }

  ul, li{
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
