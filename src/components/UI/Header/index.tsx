import React from "react";
import { Header } from "./styles";
import { NavLink } from "react-router-dom";
import LinkButton from "../Button/LinkButton";
import logo from "../../../assets/startup-dark.png";

const Component: React.FC = () => {
  return (
    <>
      <Header>
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
      </Header>
    </>
  );
};

Component.displayName = "components/UI/Header";
export default Component;
