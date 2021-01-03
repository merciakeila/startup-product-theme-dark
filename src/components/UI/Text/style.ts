import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 50px;
  font-weight: 300;
  line-height: 50px;
  margin-bottom: 30px;
  text-align: center;
  @media only screen and (max-width: 610px) {
    font-size: 40px;
  }
`;

export const Paragraph = styled.p`
  font-size: 26px;
  font-weight: 300;
  line-height: 45px;
  text-align: center;

  @media only screen and (max-width: 610px) {
    font-size: 20px;
    line-height: 27px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
