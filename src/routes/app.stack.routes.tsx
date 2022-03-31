import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { DetalhesCarro } from '../screens/DetalhesCarro'
import { Agendamentos } from '../screens/Agendamentos'
import { AgendamentosDetalhes } from '../screens/AgendamentosDetalhes'
import { Confirmacao } from '../screens/Confirmacao'
import { MeusCarros } from '../screens/MeusCarros'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

const { Navigator, Screen } = createStackNavigator()

export function AppStackRoutes({ navigation, route }) {
   const tabHiddenRoutes = ["DetalhesCarro"];

    useEffect(() => {

        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {

            navigation.setOptions({ tabBarVisible: false });

        } else {

            navigation.setOptions({ tabBarVisible: true });

        }

    }, [navigation, route]);

    return (
        <Navigator headerMode="none" initialRouteName='Home'>
            <Screen
                name="Home"
                options={{ gestureEnabled: false }}
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