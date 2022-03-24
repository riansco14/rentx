import React, { useState } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import * as Yup from 'yup'
import { BackButton } from '../../../components/BackButton'
import { Bullet } from '../../../components/Bullet'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'

import { Container, Header, Steps, Title, SubTitle, Form, FormTitle } from './styles'

export function CriarContaPrimeiroPasso() {
    const navigation = useNavigation()

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [numeroCNH, setNumeroCNH] = useState('')

    function handleBack() {
        navigation.goBack()
    }

    async function handleProximoPasso() {
        try {
            const schema = Yup.object().shape({
                nome: Yup.string()
                    .required('O nome é obrigatório'),
                email: Yup.string()
                    .email('Insira um e-mail válido')
                    .required('O e-mail é obrigatório'),
                numeroCNH: Yup.string()
                    .required('O número da CNH é obrigatório'),
            })
            const data = {nome, email, numeroCNH}
            await schema.validate(data)

            navigation.navigate('CriarContaSegundoPasso', { user: data})
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                return Alert.alert('Opa', error.message)
            }
        }
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
                    <FormTitle>1. Dados</FormTitle>

                    <Input
                        iconName='user'
                        placeholder='Nome'
                        value={nome}
                        onChangeText={setNome}
                    />

                    <Input
                        iconName='mail'
                        placeholder='E-mail'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Input
                        iconName='credit-card'
                        placeholder='CNH'
                        keyboardType='numeric'
                        value={numeroCNH}
                        onChangeText={setNumeroCNH}
                    />

                </Form>

                <Button
                    title='Próximo'
                    onPress={handleProximoPasso}
                />

            </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    )
}