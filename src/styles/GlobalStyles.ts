import styled, {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
      max-height: 100vh;
      max-width: 100vw;
      --webkit-font-smoothing: antialiased;
      
      width: 100%;
      height: 100%;
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
      --icons: #14D2B8;
      --white: #FDFDFD;
      --black-smooth: #343434;
    }
    
`

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  box-sizing: border-box;
`