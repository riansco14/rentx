import React from 'react'
import { ScrollView } from 'react-native'
import { Acessorio } from '../../components/Acessorio'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

import AceleracaoSvg from '../../assets/acceleration.svg'
import VelocidadeSvg from '../../assets/speed.svg'
import GasolinaSvg from '../../assets/gasoline.svg'
import EnergiaSvg from '../../assets/energy.svg'
import HibridoSvg from '../../assets/hybrid.svg'
import TorqueSvg from '../../assets/force.svg'
import PessoasSvg from '../../assets/people.svg'
import CambioSvg from '../../assets/exchange.svg'

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
    Footer,
    PeriodoAlguel, CalendarioIcon, DateInfo, DateTitulo, DateValor,
    AluguelPreco, AluguelPrecoLabel, AluguelPrecoDetalhes, AluguelPrecoParcelas, AluguelPrecoTotal 
} from './styles'
import { Acessorios } from '../../components/Acessorio/styles'
import { Button } from '../../components/Button'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import {Feather} from '@expo/vector-icons'

export function AgendamentosDetalhes() {
    const theme = useTheme()
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
                
                
                <Acessorios>
                    <Acessorio icon={VelocidadeSvg} titulo="380km/h" />
                    <Acessorio icon={AceleracaoSvg} titulo="3.2s" />
                    <Acessorio icon={TorqueSvg} titulo="800 HP" />
                    <Acessorio icon={GasolinaSvg} titulo="Gasolina" />
                    <Acessorio icon={CambioSvg} titulo="380km/h" />
                    <Acessorio icon={PessoasSvg} titulo="2 Pessoas" />
                </Acessorios>

                <PeriodoAlguel>
                    <CalendarioIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarioIcon>

                    <DateInfo>
                        <DateTitulo>
                            DE
                        </DateTitulo>

                        <DateValor>
                            18/06/2021
                        </DateValor>
                    </DateInfo>

                    <DateInfo>
                        <DateTitulo>
                            DE
                        </DateTitulo>

                        <DateValor>
                            18/06/2021
                        </DateValor>
                    </DateInfo>
                </PeriodoAlguel>

                <AluguelPreco> 
                    <AluguelPrecoLabel>
                        Total
                    </AluguelPrecoLabel>

                    <AluguelPrecoDetalhes>
                        <AluguelPrecoParcelas>
                            R$ 580 x 3 diárias
                        </AluguelPrecoParcelas>
                        <AluguelPrecoTotal>
                            R$ 2.900
                        </AluguelPrecoTotal>
                    </AluguelPrecoDetalhes>
                </AluguelPreco>


                
            </ScrollView>

            <Footer>
                <Button title="Titulo" onPress={()=>console.log("LOG")} />
            </Footer>
        </Container>
    )
}