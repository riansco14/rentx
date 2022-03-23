import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Container, IconContainer, InputText, PasswordVisibilityButton } from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
    value?: string
}

export function InputPassword({
    iconName,
    value,
    ...rest
}: InputProps) {
    const theme = useTheme()
    
    const [isFilled, setIsFilled] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(true)


    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!value)
    }

    function handlePasswordVisibility() {
        setIsPasswordVisible(oldState => !oldState)
    }

    return (
        <Container>
            <IconContainer
                 isFocused={isFocused}
            >
                <Feather
                    name={iconName}
                    color={(isFocused || isFilled) ? theme.colors.main : theme.colors.text_detail}
                    size={24}

                />
            </IconContainer>
            <InputText
                {...rest}
                value={value}
                secureTextEntry={isPasswordVisible}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                isFocused={isFocused}
            />

            <PasswordVisibilityButton onPress={handlePasswordVisibility}>
                <IconContainer>
                    <Feather
                        name={isPasswordVisible?'eye':'eye-off'}
                        color={theme.colors.text_detail}
                        size={24}
                    />
                </IconContainer>
            </PasswordVisibilityButton>
        </Container>
    )
}