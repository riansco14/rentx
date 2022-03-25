import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useAuth } from '../hooks/auth'
import { AppStackRoutes } from './app.stack.routes'
import { AppTabRoutes } from './app.tab.routes'
import { AuthRoutes } from './auth.routes'


export function Routes() {
    const { usuario } = useAuth()
    return (
        <NavigationContainer>
            {
                usuario ? <AppTabRoutes />: <AuthRoutes />
            }
        </NavigationContainer>
    )
}