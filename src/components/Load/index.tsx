import React from 'react'
import {Container} from './styles'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'



export function Load() {
    const theme = useTheme()

    return (
        <Container>
            <ActivityIndicator color={theme.colors.main} size="large" />
        </Container>
    )
}