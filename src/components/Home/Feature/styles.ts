import styled from 'styled-components'

// FEATURE

export const Container = styled.section`
	margin: 100px 0;
	div {
		justify-content: center;
		display: flex;
		@media only screen and (min-width: 550px) and (max-width: 1280px) {
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			text-align: center;
		}

		@media only screen and (max-width: 649px) {
			justify-content: center;
			flex-wrap: wrap;

		}
	}
`

export const FeatureBase = styled.div`
	flex-direction: column;
	align-items: baseline;

	@media only screen and (max-width: 649px) {
		margin-right: auto;

		margin-left: auto;
	}
`

export const Img = styled.img`
	width: 100%;
	height: auto;
	margin: 40px 0;
	flex: 1.2;
`
