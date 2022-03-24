import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
    background-color: ${({ theme }) => theme.colors.header};
`

export const Content = styled.View`
    align-items: center;
`
export const Titulo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};

    margin-top: ${RFValue(40)}px;
`
export const Mensagem = styled.Text`
    font-family: ${({theme})=>theme.fonts.secondary_600};
    font-size: ${RFValue(15)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text_detail};

    margin-top: ${RFValue(16)}px;
`

export const Footer = styled.View`
    width: 100%;
    align-items: center;

    margin: 80px 0;
`