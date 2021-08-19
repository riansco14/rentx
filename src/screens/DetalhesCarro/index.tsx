import React from 'react'
import { ScrollView } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

import {
    CarroImages, Container, Header, 
    Descricao,
    Detalhes,
    Marca,
    Nome,
    Alugar,
    AlugarPeriodo,
    AlugarPreco,
    Sobre
} from './styles'

export function DetalhesCarro() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => console.log("Clicou")} />
            </Header>
            <CarroImages>

                <ImageSlider imagesUrl={["https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-S5.png", "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-S5.png", "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-S5.png", "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-S5.png"]} />
            </CarroImages>



            <ScrollView
                contentContainerStyle={{ padding: 24, alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            >
                <Detalhes>
                    <Descricao>
                        <Marca>Lamborghini</Marca>
                        <Nome>Huracan</Nome>
                    </Descricao>
                    <Alugar>
                        <AlugarPeriodo>Ao dia</AlugarPeriodo>
                        <AlugarPreco>R$ 580</AlugarPreco>
                    </Alugar>
                </Detalhes>

                <Sobre>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem dolores incidunt unde quas nisi expedita, sed distinctio architecto officiis. Velit vel reiciendis inventore aspernatur dicta deserunt, eaque harum sit.

                </Sobre>
            </ScrollView>
        </Container>
    )
}