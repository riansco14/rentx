import { RectButton } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
`

export const Header = styled.View`
    height: ${RFPercentage(30)}px;
    width: 100%;

    background-color: ${({theme})=>theme.colors.shape_dark};
`

export const HeaderTop = styled.View`
    margin-top: 40px;
    flex-direction: row;

    align-items: center;
`

export const Title = styled.Text`
    flex: 1;
    font-size: 25px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.white};

    text-align: center;
`

export const Content = styled.View`
    width: 100%;
    height: 100%;

    align-items: center;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const AvatarContainer = styled.View`

    height: 180px;
    width: 180px;
    top:-90px;
`
export const AvatarImage = styled.Image`
    height: 180px;
    width: 180px;
    border-radius: 90px;

    background-color: ${({ theme }) => theme.colors.shape};
`

export const IconContainer = styled(RectButton)`
    position: absolute;
    bottom: 10px;
    right: 10px;

    height: 40px;
    width: 40px;

    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.main};

`
