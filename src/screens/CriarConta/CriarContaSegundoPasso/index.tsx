import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components/native'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { InputPassword } from '../../../components/InputPassword'

import { Container, Header, Steps, Title, SubTitle, Form, FormTitle } from './styles'

interface Params {
    user: {
        name: string
        email: string
        numeroCNH: string
    }
}

export function CriarContaSegundoPasso() {
    const theme = useTheme()
    const navigation = useNavigation()
    const route = useRoute()

    const { user } = route.params as Params

    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    function handleBack() {
        navigation.goBack()
    }

    function handleRegister() {
        if (!password || !passwordConfirm) {
            return Alert.alert('Informe a senha e a senha de confirmação')    
        }

        if (password !== passwordConfirm) {
            return Alert.alert('As senhas não são iguais')    
        }

        //ENviar para API

    }

    return (<KeyboardAvoidingView behavior='position' enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
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

                <Form>
                    <FormTitle>2. Senha</FormTitle>

                    <InputPassword
                        iconName='lock'
                        placeholder='Senha'
                        value={password}
                        onChangeText={setPassword}
                    />
                    <InputPassword
                        iconName='lock'
                        placeholder='Repetir Senha'
                        value={passwordConfirm}
                        onChangeText={setPasswordConfirm}
                    />


                </Form>

                <Button
                    title='Cadastrar'
                    color={theme.colors.sucess}
                    onPress={handleRegister}
                />

            </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}