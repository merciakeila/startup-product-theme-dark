import styled from "styled-components";


export const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;

  div {
    margin: 40px 0; 
  }
`;

export const Error = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
