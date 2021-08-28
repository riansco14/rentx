import React from 'react'
import {  SvgProps } from 'react-native-svg'

import {Container, Titulo} from './styles'

interface Props{
    titulo: string
    icon: React.FC<SvgProps>
}

export function Acessorio({titulo, icon: Icon }: Props) {
    return (
        <Container>

            <Icon width={32} height={32} />
            <Titulo>
                {titulo}
            </Titulo>

        </Container>
    )
}