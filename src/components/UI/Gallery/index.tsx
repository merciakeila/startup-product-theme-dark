import React, { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { ImgSingle, Container, LeftButton, RightButton, ButtonClose } from './styles'
import IGallery from '_models/IGallery'

type Props = {
	gallery: IGallery[]
	activeImage?: number
	onClose(): void
	/*
  icon: string;
  title: string;
  description: string;
  */
}

const Component: React.FC<Props> = ({ gallery, activeImage = 0, onClose }) => {
	const [imageIndex, setImageIndex] = useState(activeImage)
	const imgBack = () => setImageIndex(imageIndex === 0 ? gallery.length - 1 : imageIndex - 1)
	const imgNext = () => setImageIndex(imageIndex === gallery.length - 1 ? 0 : imageIndex + 1)
	const selectedImage = gallery[imageIndex].img

	return (
		<Container>
			<LeftButton type="button" onClick={imgBack}>
				<FiArrowLeft size={30} />
			</LeftButton>
			<ImgSingle src={selectedImage} alt="Imagem" />
			<ButtonClose onClick={onClose}>Fechar</ButtonClose>
			<RightButton type="button" onClick={imgNext}>
				<FiArrowRight size={30} />
			</RightButton>
		</Container>
	)
}

export default Component
