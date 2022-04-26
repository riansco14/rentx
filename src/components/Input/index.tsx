import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Container, IconContainer, InputText } from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
    value?: string
}

export function Input({
    iconName,
    value,
    ...rest
}: InputProps) {
    const theme = useTheme()

    const [isFilled, setIsFilled] = useState(false)
    const [isFocused, setIsFocused] = useState(false)



    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!value)
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

                ></Feather>
            </IconContainer>
            <InputText
                value={value}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                isFocused={isFocused}
                {...rest}
            />
        </Container>
    )
}