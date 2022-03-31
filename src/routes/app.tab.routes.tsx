import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { MeusCarros } from '../screens/MeusCarros'
import { AppStackRoutes } from './app.stack.routes'

import HomeSvg from '../assets/home.svg'
import CarSvg from '../assets/car.svg'
import PeopleSvg from '../assets/people.svg'
import { useTheme } from 'styled-components'
import { Platform } from 'react-native'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
    const theme = useTheme()
    return (
        <Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.main,
                inactiveTintColor: theme.colors.text_detail,
                showLabel: false,
                style: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 78,
                    backgroundColor: theme.colors.background_primary
                }
            }}
        >
            <Screen
                name="Home"
                component={AppStackRoutes}
                options={{
                    tabBarIcon: (({ color }) => (
                        <HomeSvg width={24} height={24} fill={color} />))
                }}
            />
            <Screen
                name="MeusCarros"
                component={MeusCarros}
                options={{
                    tabBarIcon: (({ color }) => (
                        <CarSvg width={24} height={24} fill={color} />))
                }}
            />
            <Screen
                name="Perfil"
                component={Home}
                options={{
                    tabBarIcon: (({ color }) => (
                        <PeopleSvg width={24} height={24} fill={color} />))
                }}
            />
        </Navigator>

    )
}