import React, { useState } from "react";
import styled, {css} from "styled-components";
import { NavLink } from "react-router-dom";
import logo from "_assets/startup-dark.png";
import open from "_assets/togglemenu.svg";
import close from "_assets/close.svg";

interface effect {
  show: boolean
}

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
    width: 100%;
    height: auto;
  }
`;

const ToggleMenu = styled.img`
  width: 25px;
  height: 25px;
  position: relative;
  z-index: 9999;
`;

const Navgation = styled.div<effect>`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 0;
  width: 100%;
  height: 100vh;
  ${(props) => props.show && css`
    transition: background-color 0.8s;
   ` }

  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  li {
    padding: 40px 0;
    text-decoration: none;
    list-style: none;

    a {
      color: var(--white);
      font-size: 18px;
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

const Component: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const showMenu = () => setMenu(!menu);

  return (
    <>
      <Header>
        <Container>
          <Brand to="/">
            <img src={logo} alt="Startup Product Theme Dark" />
          </Brand>
          <ToggleMenu src={menu ? open : close} onClick={showMenu} />
          {!menu && (
            <Navgation show={true}>
              <ul>
                <li>
                  <NavLink to="/" onClick={showMenu}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="#product" onClick={showMenu}>Product</NavLink>
                </li>
                <li>
                  <NavLink to="#about" onClick={showMenu}>About</NavLink>
                </li>
                <li>
                  <NavLink to="#product" onClick={showMenu}>Contact</NavLink>
                </li>
              </ul>
            </Navgation>
          )}
        </Container>
      </Header>
    </>
  );
};

export default Component;
