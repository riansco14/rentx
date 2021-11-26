import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, Titulo } from './styles'

interface ConfirmarButtonProps extends RectButtonProps{
    titulo: string
}

export function ConfirmarButton({titulo, ...rest}: ConfirmarButtonProps) {
    return (
        <Container {...rest}>
            <Titulo>{titulo}</Titulo>
        </Container>
    )
}