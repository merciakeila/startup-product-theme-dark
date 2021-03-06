import React from "react";
import { Header, Container } from "./styles";
import { NavLink } from "react-router-dom";
import LinkButton from "_UI/Button/LinkButton";
import logo from "_assets/startup-dark.png";
import NavRoutes from "./NavRoutes";

const Desktop: React.FC = () => {
  return (
		<>
			<Header>
				<Container>
					<NavLink to="/">
						<img src={logo} alt="Startup Product Theme Dark" />
					</NavLink>
					<ul>
						{NavRoutes.map(({ to, Name, hiddeDesktop }) => (
							<li key={Name} hidden={hiddeDesktop}>
								<NavLink to={to}>{Name}</NavLink>
							</li>
						))}
					</ul>
					<LinkButton to="/login" isBlack>
						Login
					</LinkButton>
				</Container>
			</Header>
		</>
  )
};

Desktop.displayName = "components/UI/Header/Desktop";
export default Desktop;
