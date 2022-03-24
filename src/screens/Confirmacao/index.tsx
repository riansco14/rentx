import React from 'react'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'

import { Container, Content, Titulo, Mensagem, Footer } from './styles'
import { useWindowDimensions } from 'react-native'
import { ConfirmarButton } from '../../components/ConfirmarButton'
import { useNavigation, useRoute } from '@react-navigation/native'

interface Props {
    titulo: string
    mensagem: string
    nextScreenRoute: string
}

export function Confirmacao() {
    const navigation = useNavigation()
    const route = useRoute()
    const { titulo, mensagem, nextScreenRoute } = route.params as Props

    const { width } = useWindowDimensions()

    function handleConfirmar() {
        navigation.navigate(nextScreenRoute)
    }

    return (
        <Container>
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} />
                <Titulo>{titulo}!</Titulo>
                <Mensagem>
                    {mensagem}
                </Mensagem>
            </Content>

            <Footer>
                <ConfirmarButton titulo="Ok" onPress={handleConfirmar} />
            </Footer>
        </Container>
    )
}