import React from 'react'
import Feather  from '@expo/vector-icons/Feather';
import { Container } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{
    iconName: React.ComponentProps<typeof Feather>['name']
}

export function Input({
    iconName
}:InputProps) {

    return (
        <Container>
            <Feather
                name={iconName}
            ></Feather>
        </Container>
    )
}