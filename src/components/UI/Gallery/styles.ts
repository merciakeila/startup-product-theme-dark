import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	top: 10px;
	right: 10px;
	left: 10px;
	bottom: 10px;
	display: flex;
	justify-content: center;
	margin: 20px;
	border-radius: 10px;
	box-shadow: 0 10px 10px #00000033;
	z-index: 999;
`
export const LeftButton = styled.button`
	left: 0;
	position: absolute;
	font-size: 24px;
	color: white;
	text-shadow: 0 0 3px black;
	outline: none;
	border: none;
	top: 0;
	width: 20%;
	bottom: 0;
	cursor: pointer;
	background: transparent;
	transition: 0.3s;
	border-radius: 10px;
	&hover {
		background: linear-gradient(to right, #00000044, transparent);
	}
`

export const RightButton = styled.button`
	right: 0;
	position: absolute;
	font-size: 24px;
	color: white;
	text-shadow: 0 0 3px black;
	outline: none;
	border: none;
	top: 0;
	width: 20%;
	bottom: 0;
	cursor: pointer;
	background: transparent;
	transition: 0.3s;
	border-radius: 10px;
	&hover {
		background: linear-gradient(to right, #00000044, transparent);
	}
`
export const ButtonClose = styled.button`
	position: absolute;
	background: #ffffff;
	border: none;
	outline: none;
	padding: 5px 10px;
	border-radius: 10px;
	cursor: pointer;
	font-size: 16px;
	color: black;
	bottom: 20px;
`

export const ImgSingle = styled.img`
	width: 100%;
	height: 100%;
	object-fit: scale-down;
	border-radius: 10px;
`
export const Thumb = styled.img``
