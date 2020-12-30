import { LinkProps } from "react-router-dom";
import styled, { css } from "styled-components";

interface Nav extends LinkProps {
  Name: string;
  hiddeMobile?: boolean;
  hiddeDesktop?: boolean;
}

const Hidde = styled.div<Nav>`
  ${(props) =>
    props.hiddeDesktop &&
    css`
      display: none;
    `}
  ${(props) =>
    props.hiddeMobile &&
    css`
      display: none;
    `}
`;

const NavRoutes: Nav[] = [
  {
    to: "/",
    Name: "Home",
  },

  {
    to: "#product",
    Name: "Product",
  },

  {
    to: "#about",
    Name: "About",
  },

  {
    to: "#contact",
    Name: "Contact",
  },

  {
    to: "/login",
    Name: "Login",
    hiddeDesktop: true,
  },
];

export default NavRoutes;
