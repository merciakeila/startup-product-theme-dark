import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;

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

      &:hover {
        color: var(--secondy);
        font-weight: bold;
        transition: background-color 0.2s;
      }
    }
  }
`;
