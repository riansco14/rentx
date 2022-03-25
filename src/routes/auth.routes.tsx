import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Confirmacao } from '../screens/Confirmacao'
import { Splash } from '../screens/Splash'
import { Login } from '../screens/Login'
import { CriarContaPrimeiroPasso } from '../screens/CriarConta/CriarContaPrimeiroPasso'
import { CriarContaSegundoPasso } from '../screens/CriarConta/CriarContaSegundoPasso'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
    return (
        <Navigator headerMode="none" initialRouteName='Splash'>
            <Screen
                name="Splash"
                component={Splash}
            />
            <Screen
                name="Login"
                options={{gestureEnabled: false}}
                component={Login}
            />
            <Screen
                name="CriarContaPrimeiroPasso"
                options={{gestureEnabled: false}}
                component={CriarContaPrimeiroPasso}
            />
            <Screen
                name="CriarContaSegundoPasso"
                options={{gestureEnabled: false}}
                component={CriarContaSegundoPasso}
            />
            <Screen
                name="Confirmacao"
                component={Confirmacao}
            />
            
        </Navigator>

    )
}