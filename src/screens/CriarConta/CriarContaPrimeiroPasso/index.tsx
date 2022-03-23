import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'

import { Container, Header, Steps, Title,SubTitle } from './styles'

export function CriarContaPrimeiroPasso() {
    const navigation = useNavigation()

    function handleBack() {
        navigation.goBack()
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleBack} />
                <Steps>
                    <Bullet active />
                    <Bullet />
                </Steps>
            </Header>

            <Title>
                Crie sua{'\n'}conta
            </Title>
            
            <SubTitle>
                Faça seu cadastro de{'\n'}
                forma rápida e fácil
            </SubTitle>

        </Container>
    )
}