import React from 'react'
import { ScrollView } from 'react-native'
import { Acessorio } from '../../components/Acessorio'
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
    Sobre,
    Footer
} from './styles'
import { Acessorios } from '../../components/Acessorio/styles'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'
import { useRoute } from '@react-navigation/native'
import { CarroDTO } from '../../dtos/CarroDTO'
import { getAcessorioIcon } from '../../utils/getAcessorioIcon'

interface Params {
    carro: CarroDTO
}
export function DetalhesCarro() {
    const navigation = useNavigation()
    const route = useRoute()
    const { carro } = route.params as Params

    function handleConfirmarAluguel() {
        navigation.navigate("Agendamentos")
    }

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleGoBack} />
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
                        <Marca>{carro.brand}</Marca>
                        <Nome>{carro.name}</Nome>
                    </Descricao>
                    <Alugar>
                        <AlugarPeriodo>{carro.rent.period}</AlugarPeriodo>
                        <AlugarPreco>R$ {carro.rent.price}</AlugarPreco>
                    </Alugar>
                </Detalhes>


                <Acessorios>
                    {carro.accessories.map((item) => {
                        return <Acessorio
                            key={item.name}
                            icon={getAcessorioIcon(item.type)}
                            titulo={item.name} />
                    })}

                </Acessorios>
                {
                /*
                 <Acessorio icon={VelocidadeSvg} titulo="380km/h" />
                    <Acessorio icon={AceleracaoSvg} titulo="3.2s" />
                    <Acessorio icon={TorqueSvg} titulo="800 HP" />
                    <Acessorio icon={GasolinaSvg} titulo="Gasolina" />
                    <Acessorio icon={CambioSvg} titulo="380km/h" />
                    <Acessorio icon={PessoasSvg} titulo="2 Pessoas" />
            */
                }





                <Sobre>
                    {carro.about}
                </Sobre>
            </ScrollView>

            <Footer>
                <Button
                    title="Escolher período de aluguel"
                    onPress={handleConfirmarAluguel} />
            </Footer>
        </Container>
    )
}