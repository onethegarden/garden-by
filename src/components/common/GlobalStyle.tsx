import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 //  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  // font-family: 'Noto Sans KR', sans-serif;
}

html,
body,
#___gatsby {
  height: 100%;
}

a,
a:hover {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}


`;

export default GlobalStyle;
