import React, { useState } from 'react'
import { BackButton } from '../../components/BackButton'

import { AvatarContainer, AvatarImage, Container, Content, Header, HeaderTop, IconContainer, Title, OptionsContainer, Options, Option, OptionTitle } from './styles'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
export function Perfil() {
    const theme = useTheme()

    const [option, setOption] = useState<'dados' | 'senha'>('dados')
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

                <OptionsContainer>
                    <Options>
                        <Option
                            active={option == 'dados'}
                            onPress={()=>setOption('dados')}
                        >
                            <OptionTitle
                                active={option == 'dados'}>
                                Dados
                            </OptionTitle>
                        </Option>
                        <Option
                            active={option == 'senha'}
                            onPress={()=>setOption('senha')}
                        >
                            <OptionTitle
                                active={option == 'senha'}>Trocar senha
                            </OptionTitle>
                        </Option>

                    </Options>
                </OptionsContainer>
            </Content>


        </Container>
    )
}