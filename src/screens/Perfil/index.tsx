import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import { BackButton } from '../../components/BackButton'
import { Input } from '../../components/Input'
import { AvatarContainer, AvatarImage, Container, Content, Header, HeaderTop, IconContainer, Title, LogoutButton, OptionsContainer, Options, Option, OptionTitle, Section } from './styles'
import { InputPassword } from '../../components/InputPassword'
import { useAuth } from '../../hooks/auth'
import { Button } from '../../components/Button'

export function Perfil() {
    const theme = useTheme()
    const { usuario, logout, updateUser } = useAuth()

    const [option, setOption] = useState<'dados' | 'senha'>('dados')

    const [avatar, setAvatar] = useState(usuario.avatar)
    const [nome, setNome] = useState(usuario.nome)
    const [numeroCNH, setNumeroCNH] = useState(usuario.numeroCNH)

    function handleLogout() {
        logout()
    }

    async function handleAvatarChange() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })

        if (result.cancelled)
            return;

        if (result.uri) {
            setAvatar(result.uri)
        }
    }

    async function handleProfileUpdate() {
        try {
            const schema = Yup.object().shape({
                driverLicense: Yup.string()
                    .required('CNH é obrigatória'),
                name: Yup.string()
                    .required('Nome é obrigatório')
            })

            const data = { name: nome, driverLicense: numeroCNH }
            await schema.validate(data)

            await updateUser({
                id: usuario.id,
                user_id: usuario.user_id,
                email: usuario.email,
                name: nome,
                driver_license: numeroCNH,
                avatar,
                token: usuario.token
            })
            Alert.alert('Perfil atualizado')
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message)
            } else {
                Alert.alert('Não foi possível atualizar o perfil')

            }
        }
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container style={{ marginBottom: useBottomTabBarHeight() }}>
                    <Header>
                        <HeaderTop>
                            <BackButton />
                            <Title>Editar Perfil</Title>
                            <LogoutButton onPress={handleLogout}>
                                <Feather name="power" size={24} color={theme.colors.shape} />
                            </LogoutButton>
                        </HeaderTop>
                    </Header>

                    <Content>
                        <AvatarContainer>
                            {!!avatar && <AvatarImage
                                source={{ uri: avatar }} />}
                            <IconContainer onPress={handleAvatarChange}>
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
                                <Input iconName='user' placeholder='Nome' autoCorrect={false} defaultValue={usuario.nome} />
                                <Input iconName='mail' editable={false} autoCorrect={false} defaultValue={usuario.email} />
                                <Input iconName='credit-card' placeholder='CNH' keyboardType='numeric' defaultValue={usuario.numeroCNH} />
                            </Section>) :
                            (<Section>
                                <InputPassword iconName='lock' placeholder='Senha Atual' />
                                <InputPassword iconName='lock' placeholder='Nova senha' />
                                <InputPassword iconName='lock' placeholder='Repetir senha' />
                            </Section>)
                        }

                        <Button title='Salvar alterações' onPress={handleProfileUpdate} />

                    </Content>



                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}