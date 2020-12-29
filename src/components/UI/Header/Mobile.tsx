import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LinkButton from "_UI/Button/LinkButton";
import logo from "_assets/startup-dark.png";
import togglemenu from "_assets/togglemenu.svg";

interface showScreenMenu {}

const Header = styled.header`
  position: fixed;
  height: 80px;
  left: 0;
  display: flex;
  width: 100%;
  top: 0;
  align-items: center;
  right: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
`;

const Brand = styled(NavLink)`
  img {
    max-width: 120px;
    width: 100%;
    height: auto;
  }
`;

const NavgationWrapper = styled.div``;

const Nav = styled.div<showScreenMenu>`
  display: none;
`;

const ToggleMenu = styled.img``;

const Component: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <Brand to="/">
            <img src={logo} alt="Startup Product Theme Dark" />
          </Brand>
          <NavgationWrapper>
            <ToggleMenu src={togglemenu} />
            <Nav>
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
            </Nav>
          </NavgationWrapper>
        </Container>
      </Header>
    </>
  );
};

export default Component;
