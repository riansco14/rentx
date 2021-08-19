import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const Header = styled.View`
    position: absolute;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    margin-top: 18px;
    margin-left: 24px;

`
export const CarroImages = styled.View`
    margin-top: 32px;
`

export const Detalhes = styled.View`
    
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`
export const Descricao = styled.View``
export const Marca = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    
    text-transform: uppercase;
`
export const Nome = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.title};
`
export const Alugar = styled.View``
export const AlugarPeriodo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
`
export const AlugarPreco = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.main};
`
export const Sobre = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    text-align: justify;

    margin-top: 24px;
`