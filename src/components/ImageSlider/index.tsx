import React from 'react'

import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarroImageContainer,
    CarroImage
} from './styles'


interface Props {
    imagesUrl: string[]
}

export function ImageSlider({ imagesUrl }: Props) {
    return (
        <Container>
            <ImageIndexes>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexes>

            <CarroImageContainer>
                <CarroImage source={{ uri: imagesUrl[0] }} />
            </CarroImageContainer>

        </Container>
    )
}