import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { DetalhesCarro } from '../screens/DetalhesCarro'
import { Agendamentos } from '../screens/Agendamentos'
import { AgendamentosDetalhes } from '../screens/AgendamentosDetalhes'
import { Confirmacao } from '../screens/Confirmacao'
import { MeusCarros } from '../screens/MeusCarros'
import { Splash } from '../screens/Splash'
import { Login } from '../screens/Login'
import { CriarContaPrimeiroPasso } from '../screens/CriarConta/CriarContaPrimeiroPasso'
import { CriarContaSegundoPasso } from '../screens/CriarConta/CriarContaSegundoPasso'

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
    return (
        <Navigator headerMode="none" initialRouteName='Login'>
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
                name="Home"
                options={{gestureEnabled: false}}
                component={Home}
            />
            <Screen
                name="DetalhesCarro"
                component={DetalhesCarro}
            />
            <Screen
                name="MeusCarros"
                component={MeusCarros}
            />
            <Screen
                name="Agendamentos"
                component={Agendamentos}
            />
            <Screen
                name="AgendamentosDetalhes"
                component={AgendamentosDetalhes}
            />
            <Screen
                name="Confirmacao"
                component={Confirmacao}
            />
            
        </Navigator>

    )
}