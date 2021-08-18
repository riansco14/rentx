import React from 'react'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

import { CarroImages, Container, Header } from './styles'

export function DetalhesCarro() {
    return (
        <Container>
            <Header>
                <BackButton />
            </Header>
            <CarroImages>

                <ImageSlider imagesUrl={["https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-S5.png","https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-S5.png","https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-S5.png","https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-S5.png"]} />
            </CarroImages>
        </Container>
    )
}