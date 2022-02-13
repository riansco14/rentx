import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import {ButtonReload, ButtonReloadTitle, Container, Title, TitleWrapper} from './styles'
import theme from '../../../../global/styles/theme';

interface Props{
    onPress: ()=>void
}

export function LoadError({onPress}:Props) {
    return (
        <Container>
            <MaterialIcons name="error" size={100} color={theme.colors.main} />
            <TitleWrapper>
                <Title>Não foi possível carregar a lista de carros</Title>
            </TitleWrapper>
            <ButtonReload onPress={onPress}>
                <ButtonReloadTitle>Recarregar</ButtonReloadTitle>
            </ButtonReload>
        </Container>
    )
}