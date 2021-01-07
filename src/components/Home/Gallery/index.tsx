import React, { useState } from 'react'
import GalleryUI from '_UI/Gallery'
import { Img } from './styles'
import { Title, Paragraph } from '_UI/Text'
import GalleryMock from '_mock/Gallery'
import { Section, Container } from './styles'
import LinkButton from '_UI/Button/LinkButton'

const Gallery: React.FC = () => {
	const [gallery] = useState(GalleryMock)
	const [galleryVisible, setGalleryVisible] = useState(false)
	const [activeImage, setActiveImage] = useState(0)
	return (
		<Section>
			<Title>Gallery</Title>
			<Paragraph>
				We focus on ergonomics and meeting you where you work. <br />
				It's only a keystroke away.
			</Paragraph>
			<Container>
				{gallery.map(({ id, img }, index) => (
					<div>
						<Img
							key={id.toString()}
							src={img}
							alt="Imagem"
							onClick={() => {
								setActiveImage(index)
								setGalleryVisible(true)
							}}
						/>
					</div>
				))}
			</Container>
			{galleryVisible && (
				<GalleryUI gallery={gallery} activeImage={activeImage} onClose={() => setGalleryVisible(false)} />
			)}
			<LinkButton to="/gallery" isBlack>
				See more
			</LinkButton>
		</Section>
	)
}

Gallery.displayName = 'components/Home/Gallery'
export default Gallery
