import React, { useState } from 'react'
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useTheme } from 'styled-components'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { InputPassword } from '../../components/InputPassword'
import * as Yup from 'yup'
import { Container, Header, Title, SubTitle, Form, Footer } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../hooks/auth'

export function Login() {
    const theme = useTheme()
    const navigation = useNavigation()
    const { login } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(email: string, password: string) {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('A senha é obrigatória')
            });

            await schema.validate({ email, password })

            login({ email, password })
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                return Alert.alert('Opa', error.message)
            } else {
                return Alert.alert(
                    'Erro na autenticação',
                    'Ocorreu um erro ao fazer login, verifique as credenciais'
                )
            }
        }


    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
                <Container>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent
                    ></StatusBar>
                    <Header>
                        <Title>Estamos{'\n'}quase lá.</Title>
                        <SubTitle>Faça seu login para começar{'\n'}
                            uma experiência incrível.</SubTitle>
                    </Header>

                    <Form>
                        <Input
                            iconName='mail'
                            placeholder='E-mail'
                            keyboardType='email-address'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={email}
                            onChangeText={setEmail}
                        />
                        <InputPassword
                            iconName='lock'
                            placeholder='Senha'
                            autoCorrect={false}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </Form>

                    <Footer>
                        <Button
                            title='Login'
                            onPress={() => {
                                handleLogin(email, password)
                            }}
                            enabled={true}
                            loading={false}
                        ></Button>

                        <Button
                            title='Criar conta gratuita'
                            color={theme.colors.background_secondary}
                            onPress={() => {
                                navigation.navigate('CriarContaPrimeiroPasso')
                            }}
                            enabled={true}
                            loading={false}
                            light={true}
                        ></Button>
                    </Footer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}