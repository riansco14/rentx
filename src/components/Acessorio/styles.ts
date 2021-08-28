import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 109px;
    height: 92px;

    border-radius: 6px;
    background-color: ${({theme})=>theme.colors.background_primary};


    align-items: center;
    justify-content: center;

    padding: 16px;
    margin-bottom: 8px;
`

export const Titulo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(13)}px;
    line-height: ${RFValue(25)}px;
    
    
`

export const Acessorios = styled.View`
    width: 100%;

    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content: space-between;
`