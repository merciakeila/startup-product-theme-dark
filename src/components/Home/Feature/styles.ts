import styled from 'styled-components'

// FEATURE

export const Container = styled.section`
	margin: 100px 0;
	div {
		justify-content: center;
		display: flex;
		flex: 0.3;
		@media only screen and (min-width: 611px) and (max-width: 1280px) {
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 0px 20px;
			text-align: center;
		}

		@media only screen and (max-width: 610px) {
			justify-content: center;
			flex-wrap: wrap;
			flex: 0.8;
		}
	}
`

export const FeatureBase = styled.div`
	flex-direction: column;
	align-items: baseline;
`

export const Img = styled.img`
	width: 100%;
	height: auto;
	margin: 40px 0;
	flex: 1.2;
`
