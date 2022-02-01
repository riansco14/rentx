import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { DetalhesCarro } from '../screens/DetalhesCarro'
import { Agendamentos } from '../screens/Agendamentos'
import { AgendamentosDetalhes } from '../screens/AgendamentosDetalhes'
import { AgendamentosConcluido } from '../screens/AgendamentosConcluido'
import { MeusCarros } from '../screens/MeusCarros'

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
    return (
        <Navigator headerMode="none">
            <Screen
                name="Home"
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
                name="AgendamentosConcluido"
                component={AgendamentosConcluido}
            />
            
        </Navigator>

    )
}