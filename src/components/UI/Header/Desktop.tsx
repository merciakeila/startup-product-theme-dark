import React from "react";
import { Header, Container } from "./styles";
import { NavLink } from "react-router-dom";
import LinkButton from "_UI/Button/LinkButton";
import logo from "_assets/startup-dark.png";

const Component: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <NavLink to="/">
            <img src={logo} alt="Startup Product Theme Dark" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="#product">Product</NavLink>
            </li>
            <li>
              <NavLink to="#about">About</NavLink>
            </li>
            <li>
              <NavLink to="#product">Contact</NavLink>
            </li>
          </ul>
          <LinkButton to="/login" isBlack>
            Login
          </LinkButton>
        </Container>
      </Header>
    </>
  );
};

Component.displayName = "components/UI/Header";
export default Component;
