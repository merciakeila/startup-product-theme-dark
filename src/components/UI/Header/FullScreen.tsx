import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LinkButton from "_UI/Button/LinkButton";
import logo from "_assets/startup-dark.png";
import open from "_assets/togglemenu.svg";
import close from "_assets/close.svg";

const Navgation = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 0;
  width: 100%;
  height: 100vh;

  ul {
      position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
`;

const Component: React.FC = () => {
  return (
    <>
      <Navgation>
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
      </Navgation>
    </>
  );
};

export default Component;
