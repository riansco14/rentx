import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Container, IconContainer, InputText } from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
}

export function Input({
    iconName, ...rest
}: InputProps) {
    const theme = useTheme()

    return (
        <Container>
            <IconContainer>
                <Feather
                    name={iconName}
                    color={theme.colors.text_detail}
                    size={24}
                    
                ></Feather>
            </IconContainer>
        <InputText  {...rest}/>
        </Container>
    )
}