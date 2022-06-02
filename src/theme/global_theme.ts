import { createGlobalStyle } from 'styled-components'

export const GlobalTheme = createGlobalStyle`
  :root {
    --color-primary: #004bff;
    --color-secondary: #00fac8;

    --color-text-primary: #0f141e;
    --color-text-secondary: #474c56;

    --color-background-primary: #fff;
    --color-background-secondary: #e5e5e5;

    --color-border-primary: #646466;

    --color-button-text-primary: #fff;
    --color-button-text-secondary: #004bff;

    --color-button-background-primary: #004bff;
    --color-button-background-secondary: #fff;

    --color-button-background-hover: #00fac8;
    --color-button-text-hover: #0f141e;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  html {
    font-size: 62.5%; /* 10px === 1rem */
  }

  body {
    font-family: Archia, sans-serif;
    font-size: 1.6rem;
    line-height: 1.6;
    color: var(--color-text-primary);
    background-color: var(--color-background-primary);
  }

  h1, h2, h3 {
    font-family: Archia, sans-serif;
    font-weight: 800;
    margin: 3rem 0;
  }

  h1 {
    font-size: 3.6rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.6rem;
    margin: 3rem 0;
  }

  a {
    color: var(--special-link);
    text-decoration: underline;
  }
`
