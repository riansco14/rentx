import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
    flex:1;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.shape_dark};
    padding: 20px;

    height: 56px;
`
export const Titulo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${({theme})=>theme.colors.white};
`