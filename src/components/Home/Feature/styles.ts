import styled from 'styled-components'

// FEATURE

export const Container = styled.section`
      margin: 100px 0;

  div {
    display: flex;
    div {
      flex-direction: column;
    }
    @media only screen and (max-width: 1280px) {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 40px 0; 
`;



