import React from "react";
import { createGlobalStyle } from "styled-components";

const MarkDownStyle = createGlobalStyle`

pre {
  margin: 1rem -2.5rem;
}
:not(pre) > code {
  padding: 0.11rem 0.3rem;
  margin: 0 0.1rem;
  border-radius: 0.2rem;
  white-space: normal;
  background: #f0f0f0;
  color: #3b3b3b;
  border: 1.2px solid #cacaca;
}
code,
pre {
  tab-size: 2;
  font-family: Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono,
    monospace;
}
`;

export default MarkDownStyle;
