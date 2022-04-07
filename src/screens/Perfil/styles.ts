import { BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface OptionProps {
    active: boolean
}

export const Container = styled.View`
`

export const Header = styled.View`
    height: ${RFPercentage(30)}px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.header};
`

export const HeaderTop = styled.View`
    margin-top: 40px;
    flex-direction: row;

    align-items: center;

    margin-right: 20px;
    margin-left: 10px;
`

export const Title = styled.Text`
    flex: 1;
    font-size: 25px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.white};

    text-align: center;
`

export const LogoutButton = styled(BorderlessButton)``

export const Content = styled.View`
    width: 100%;
    padding: 0 24px;

    align-items: center;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const AvatarContainer = styled.View`
    margin-top: -90px;
    height: 180px;
    width: 180px;

    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 90px;
`
export const AvatarImage = styled.Image`
    height: 180px;
    width: 180px;
    border-radius: 90px;
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
export const OptionsContainer = styled.View`
    padding: 0 24px;
    margin-top: 32px;
`

export const Options = styled.View`
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.line};
    
    flex-direction: row;
    justify-content: space-around;

    margin-bottom: 24px;

`

export const Option = styled(TouchableOpacity)<OptionProps>`
    padding-bottom: 14px;
    ${({ active }) => active && css`
        border-bottom-color: ${({ theme }) => theme.colors.main};
        border-bottom-width: 3px;
    `}

`

export const OptionTitle = styled.Text<OptionProps>`
    font-family: ${({ theme, active }) => active ? theme.fonts.secondary_600 : theme.fonts.secondary_500};
    font-size: ${RFValue(20)}px;
    color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.text_detail};

`

export const Section = styled.View`
    width: 100%;
`