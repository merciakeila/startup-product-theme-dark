import styled from "styled-components";

export const Header = styled.header`
  padding: 20px 0px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  right: 0;
  height: 103px;
  z-index: 999;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1240px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 0 30px;
    list-style: none;

    a {
      text-decoration: none;
      font-weight: 500;
      font-size: 18px;

      &:hover {
        color: var(--secondy);
        font-weight: bold;
        transition: background-color 0.2s;
      }
    }
  }
  @media only screen and (min-width: 961px) and (max-width: 1280px) {
    padding: 20px 40px;
  }
`;