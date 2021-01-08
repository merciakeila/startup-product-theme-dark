import React from 'react'
import { ContainerButton } from '_components/Home/Gallery/styles'
import LinkButton from '_UI/Button/LinkButton'
import { Main, Features, Plans, Gallery, Partners, Testemonials } from '_components/Home'
const Home: React.FC = () => (
	<>
		<Main />
		<Features />
		<Plans />
		<Gallery />
		<ContainerButton>
			<LinkButton to="/gallery" isBlack>
				See more
			</LinkButton>
		</ContainerButton>
	</>
)

export default Home
