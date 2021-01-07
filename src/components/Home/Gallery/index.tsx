import React, { useState, useEffect } from 'react'
import GalleryUI from '_UI/Gallery'
import { Container, Img } from './styles'
import GalleryMock from '_mock/Gallery'
import IGallery from '_models/IGallery'

const Gallery: React.FC = () => {
	const [gallery, setGallery] = useState(GalleryMock)
	const [galleryVisible, setGalleryVisible] = useState(false)
	const [activeImage, setActiveImage] = useState(0)
	return (
		<>
			{gallery.map(({ id, img }, index) => (
				<Img
					key={id.toString()}
					src={img}
					alt="Imagem"
					onClick={() => {
						setActiveImage(index)
						setGalleryVisible(true)
					}}
				/>
			))}
			{galleryVisible && (
				<GalleryUI gallery={gallery} activeImage={activeImage} onClose={() => setGalleryVisible(false)} />
			)}
		</>
	)
}

Gallery.displayName = 'components/Home/Gallery'
export default Gallery
