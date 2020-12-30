import styled, {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
     max-width: 1240px;
    box-sizing: border-box;
    max-height: 100vh;
    --webkit-font-smoothing: antialiased;
    width: 100%;
    height: 100%;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;

     @media only screen and (max-width: 960px) {
      margin-top: 60px;
    }

    }

    *, button, input {
      border: 0;
      background-color: var(--primary);
      font-family: 'Inter', sans-serif;
      color: var(--white);
    }

    html {
      background: (--primary);
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h3, h4, h5, h6, p, span {
      color: var(--wihite);
    }

    a {
      text-decoration: none;
      font-style: none;

      &:hover {
        font-style: none;
      }
    }

    :root {
      --primary: #181818;
      --secondy: #4553FE;
      --secondy-lighting: #6871e3;
      --icons: #14D2B8;
      --white: #FDFDFD;
      --black-smooth: #343434;
    }
    
`
