import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
    width: 100%;
    height: 126px;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    padding: 24px;
    margin-bottom: 16px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;


    
`

export const DetalhesCarro = styled.View`
    
`

export const Marca = styled.Text`
    font-family: ${({theme})=>theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    
    text-transform: uppercase;
    
`
export const Nome = styled.Text`
    font-family: ${({theme})=>theme.fonts.secondary_500};
    font-size: ${RFValue(15)}px;
    color: ${({theme})=>theme.colors.title};
    
`

export const SobreContainer = styled.View`
     flex-direction: row;
     align-items: flex-end;

     margin-top: 16px;
`
export const Alugar = styled.View`

`
export const AlugarPeriodo = styled.Text`
    font-family: ${({theme})=>theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    
`
export const AlugarPreco = styled.Text`
    font-family: ${({theme})=>theme.fonts.secondary_500};
    font-size: ${RFValue(15)}px;
    color: ${({theme})=>theme.colors.main};
    
`
export const Tipo = styled.View`
    margin-left: 24px;
    
`
export const ImageCarro = styled.Image`
    width: 167px;
    height: 85px;
    

`