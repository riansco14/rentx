import React from 'react'
import { ActivityIndicator } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

import { Container, Title } from './styles'

interface Props {
    title: string
    color?: string
    onPress(): void
    enabled?: boolean
    loading?: boolean
}

export function Button({ title, color, onPress, enabled = true, loading=false }: Props) {
    const theme = useTheme()
    return (
        <Container color={color ? color : theme.colors.main} onPress={onPress}
            style={{ opacity: (enabled===false || loading) ?  0.5: 1 }}
            enabled={enabled}
        >
            {loading ?<ActivityIndicator color={theme.colors.shape}></ActivityIndicator>
            :<Title>
                {title}
            </Title>}
        </Container>
    )
}