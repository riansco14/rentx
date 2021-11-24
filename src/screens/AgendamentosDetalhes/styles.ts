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

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
    
    padding: 24px 24px 24px;

`

export const PeriodoAlguel = styled.View`
    width: 100%;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    border-bottom-width: 1px ;
    border-bottom-color: ${({ theme }) => theme.colors.line};
    padding: 16px;
`
export const CalendarioIcon = styled.View`
    background-color: ${({ theme }) => theme.colors.main};
    justify-content: center;
    align-items: center;

    width: 48px;
    height: 48px;
`
export const DateInfo = styled.View``
export const DateTitulo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
`
export const DateValor = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`

export const AluguelPreco = styled.View`
    width: 100%;
    flex-direction: column;

    justify-content: space-between;
    `
export const AluguelPrecoLabel = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`
export const AluguelPrecoDetalhes = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
export const AluguelPrecoParcelas = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`
export const AluguelPrecoTotal = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.sucess};
    font-size: ${RFValue(24)}px;
`