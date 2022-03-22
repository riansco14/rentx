import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Container, IconContainer, InputText, PasswordVisibilityButton } from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
}

export function InputPassword({
    iconName, ...rest
}: InputProps) {
    const theme = useTheme()

    const [isPasswordVisible, setIsPasswordVisible] = useState(true)

    function handlePasswordVisibility() {
        setIsPasswordVisible(oldState => !oldState)
    }

    return (
        <Container>
            <IconContainer>
                <Feather
                    name={iconName}
                    color={theme.colors.text_detail}
                    size={24}

                />
            </IconContainer>
            <InputText secureTextEntry={isPasswordVisible} {...rest} />

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