import React, { useState, useEffect } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { ImgSingle, Container, LeftButton, RightButton, ButtonClone } from './styles'
import IGallery from '_models/IGallery'

type Props = {
	gallery: IGallery
	/*
  icon: string;
  title: string;
  description: string;
  */
}

const Component: React.FC<Props> = ({ gallery }) => {
	const { img, activeImg } = gallery
	const [imagem, setImagem] = useState(activeImg)
	const [close, setClose] = useState(true)
	const onClose = () => setClose(!close)

	const ImgBack = () => setImagem(imagem === 0 ? img.length - 1 : imagem - 1)
	const ImgNext = () => setImagem(imagem === img.length - 1 ? 0 : imagem + 1)

	return (
		<>
			{!close && (
				<Container>
					<LeftButton type="button" onClick={ImgBack}>
						<FiArrowLeft size={30} />
					</LeftButton>
					<ImgSingle src={img[imagem]} alt="Imagem" />
					<ButtonClone onClick={onClose}>Fechar</ButtonClone>
					<RightButton type="button" onClick={ImgNext}>
						<FiArrowRight size={30} />
					</RightButton>
				</Container>
			)}
		</>
	)
}

export default Component
