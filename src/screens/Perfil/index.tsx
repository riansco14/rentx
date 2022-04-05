import React from 'react'
import { BackButton } from '../../components/BackButton'

import { AvatarContainer, AvatarImage, Container, Content, Header, HeaderTop, IconContainer, Title } from './styles'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
export function Perfil() {
    const theme = useTheme()
    return (
        <Container>
            <Header>
                <HeaderTop>
                    <BackButton />
                    <Title>Editar Perfil</Title>
                </HeaderTop>
            </Header>

            <Content>
                <AvatarContainer>
                    <AvatarImage
                        source={{ uri: 'https://avatars.githubusercontent.com/u/6424894?v=4' }} />
                    <IconContainer>
                        <Feather color={theme.colors.white} size={24} name="camera" />
                    </IconContainer>
                </AvatarContainer>
            </Content>
        </Container>
    )
}