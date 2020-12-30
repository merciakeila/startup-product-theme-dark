import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 102px;
    font-weight: 600;
    line-height: 125px;
    text-align: center;
    margin: 20px 0;
  }

  p {
    font-size: 26px;
    font-weight: 300;
    margin: 0 auto;
    line-height: 45px;
    max-width: 800px;
    text-align: center;
  }

  @media only screen and (max-width: 960px) {
    h1 {
      font-size: 50px;
      font-weight: 600;
      line-height: 66px;
    }

    p {
      font-size: 20px;
      line-height: 39px;
      max-width: 350px;
    }
  }
`;

export const Buttons = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;

  a {
    padding: 26px 60px;

    & + a {
      margin-left: 35px;
    }
  }

  // media-breakpoint

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      padding: 26px 60px;

      & + a {
        margin-left: 0;
        margin-top: 30px;
      }
    }
  }
`;

export const Dashboard = styled.img`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
