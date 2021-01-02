import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--white);
  padding: 40px 50px;
  border-radius: 16px;
  display: flex;
  max-width: 550px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 20px 0;
  }
`;

export const Heading = styled.h3`
  background-color: var(--white);
  color: var(--primary);
  font-size: 20px;
  display: flex;
  font-weight: 600;
  justify-content: center;
  margin-top: 20px;
`;

export const Description = styled.p`
  background-color: var(--white);
  color: var(--primary);
  max-width: 282px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 40px auto;
  font-size: 16px;
  line-height: 28px;
  color: var(--grey-smooth);
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 40px auto;
  max-width: 500px;
`;
