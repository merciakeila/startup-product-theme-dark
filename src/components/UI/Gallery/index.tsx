import React, { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { ImgSingle, Container, LeftButton, RightButton, ButtonClose } from './styles'
import IGallery from '_models/IGallery'

type Props = {
	gallery: IGallery[]
	activeImage?: number
	onClose(): void
}

const Component: React.FC<Props> = ({ gallery, activeImage = 0, onClose }) => {
	const [imageIndex, setImageIndex] = useState(activeImage)

	const imgBack = () => setImageIndex(imageIndex === 0 ? gallery.length - 1 : imageIndex - 1)
	const imgNext = () => setImageIndex(imageIndex === gallery.length - 1 ? 0 : imageIndex + 1)

	const selectedImage = gallery[imageIndex].img

	const leftButton = (
		<LeftButton type="button" onClick={imgBack}>
			<FiArrowLeft size={30} />
		</LeftButton>
	)

	const rightButton = (
		<RightButton type="button" onClick={imgNext}>
			<FiArrowRight size={30} />
		</RightButton>
	)

	return (
		<Container>
			{leftButton}
			<ImgSingle src={selectedImage} alt="Imagem" />
			<ButtonClose onClick={onClose}>Fechar</ButtonClose>
			{rightButton}
		</Container>
	)
}

export default Component
