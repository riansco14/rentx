import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { MeusCarros } from '../screens/MeusCarros'
import { AppStackRoutes } from './app.stack.routes'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
    return (
        <Navigator>
            <Screen
                name="Home"
                component={AppStackRoutes}
            />
            <Screen
                name="MeusCarros"
                component={MeusCarros}
            />
            <Screen
                name="Perfil"
                component={Home}
            />
        </Navigator>

    )
}