import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;

  div {
    margin: 20px;
    display: flex;

    @media only screen and (max-width: 960px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
