import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import { BackButton } from '../../components/BackButton'
import { Input } from '../../components/Input'
import { AvatarContainer, AvatarImage, Container, Content, Header, HeaderTop, IconContainer, Title, LogoutButton, OptionsContainer, Options, Option, OptionTitle, Section } from './styles'
import { InputPassword } from '../../components/InputPassword'
import { useAuth } from '../../hooks/auth'

export function Perfil() {
    const theme = useTheme()
    const {usuario} = useAuth()

    const [option, setOption] = useState<'dados' | 'senha'>('dados')

    function handleLogout() {
        
    }
    
    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <HeaderTop>
                            <BackButton />
                            <Title>Editar Perfil</Title>
                            <LogoutButton onPress={handleLogout}>
                                <Feather name="power" size={24} color={theme.colors.shape}  />
                            </LogoutButton>
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
                                    onPress={() => setOption('dados')}
                                >
                                    <OptionTitle
                                        active={option == 'dados'}>
                                        Dados
                                    </OptionTitle>
                                </Option>
                                <Option
                                    active={option == 'senha'}
                                    onPress={() => setOption('senha')}
                                >
                                    <OptionTitle
                                        active={option == 'senha'}>Trocar senha
                                    </OptionTitle>
                                </Option>

                            </Options>
                        </OptionsContainer>
                        {option === 'dados' ?
                            (<Section>
                                <Input iconName='user' placeholder='Nome' autoCorrect={false}  defaultValue={usuario.nome} />
                                <Input iconName='mail' editable={false} autoCorrect={false}  defaultValue={usuario.email} />
                                <Input iconName='credit-card' placeholder='CNH' keyboardType='numeric'  defaultValue={usuario.numeroCNH} />
                            </Section>) :
                            (<Section>
                                <InputPassword iconName='lock' placeholder='Senha Atual' />
                                <InputPassword iconName='lock' placeholder='Nova senha' />
                                <InputPassword iconName='lock' placeholder='Repetir senha' />
                            </Section>)
                        }

                    </Content>


                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}