import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 20px 0;
	align-items: baseline;
`

export const HeadingBase = styled.div`
	display: flex;
	align-items: self-start;
	margin-bottom: 20px;
	img {
		margin-right: 10px;
		margin-bottom: 10px;
	}
`

export const Icon = styled.img`
	width: 30px;
	height: 30px;
`

export const Title = styled.h3`
	font-size: 25px;
	text-align: left;
	font-weight: 500;
	line-height: 32px;
	white-space: pre-wrap;
	@media only screen and (max-width: 550px) {
		font-size: 20px;
	}
`

export const Content = styled.div`
	font-size: 18px;
	text-align: left;
	font-weight: 500;
	line-height: 29px;
	white-space: pre-wrap;
	@media only screen and (max-width: 650px) {
		font-size: 16px;
	}
`
