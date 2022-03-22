import { TextInput } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface InputContainerProps{
    isFocused: boolean
}

export const Container = styled.View<InputContainerProps>`
    flex-direction: row;

      
    ${({theme, isFocused }) => isFocused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main};
    `}
`
export const IconContainer = styled.View`
    height: 56px;
    width: 55px;
    justify-content: center;
    align-items: center;


    background-color: ${({theme})=>theme.colors.background_secondary};
`

export const InputText = styled(TextInput)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    font-size: ${RFValue(15)}px;

    padding: 0 23px;
    
`

export const PasswordVisibilityButton = styled(BorderlessButton)`
`