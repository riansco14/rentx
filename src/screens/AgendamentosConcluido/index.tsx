import React from 'react'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import {Container, Content, Titulo, Mensagem, Footer} from './styles'
import { useWindowDimensions } from 'react-native'
import { ConfirmarButton } from '../../components/ConfirmarButton'
import { useNavigation } from '@react-navigation/core'



export function AgendamentosConcluido() {
    const navigation = useNavigation()
    const { width } = useWindowDimensions()
    
    function handleConfirmar() {
        navigation.navigate("Home")
    }

    return (
        <Container>
            <LogoSvg width={width} />

            <Content> 
                <DoneSvg width={80} />
                <Titulo>Carro alugado!</Titulo>
                <Mensagem>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX  {'\n'}
                    pegar o seu automovel.
                </Mensagem>
            </Content>

            <Footer>
                <ConfirmarButton titulo="Ok" onPress={handleConfirmar} />
            </Footer>
        </Container>
    )
}