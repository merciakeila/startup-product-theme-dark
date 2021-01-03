import styled from "styled-components";

export const Section = styled.section`
margin: 40px 0;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  div {
    margin: 20px;
    display: flex;

    @media only screen and (max-width: 1280px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
