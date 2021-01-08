import styled from 'styled-components'

export const Section = styled.section`
	margin: 60px 0;
`

export const Container = styled.div`
	display: flex;
	margin-top: 50px;
	justify-content: space-evenly;
	flex-wrap: wrap;
	div {
		max-width: 380px;
		height: 317px;
		margin: 10px 15px;
	}
	@media screen and (max-width: 1135px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;

		div {
			flex: 1;
			max-width: 100%;
			padding-left: 20px;
			padding-right: 20px;
		}
	}
`

export const Img = styled.img`
	width: 100%;
	border-radius: 16px;
	height: 100%;
	cursor: pointer;
	object-fit: cover;
`

export const ContainerButton = styled.div`
	max-width: 206px;
	margin: 20px auto;
`
