import React from 'react'

import {
    Container, DetalhesCarro,
    Marca,
    Nome,
    SobreContainer,
    Alugar,
    AlugarPeriodo,
    AlugarPreco,
    Tipo,
    ImageCarro,
} from './styles'

import { RectButtonProps } from 'react-native-gesture-handler'
import { getAcessorioIcon } from '../../utils/getAcessorioIcon';
import { Car as ModelCar } from '../../databases/model/Car';


interface Props extends RectButtonProps {
    data: ModelCar
}


export function Carro({ data, ...rest }: Props) {
    const MotorIcon = getAcessorioIcon(data.fuel_type)
    const carData = data
    
    return (
        <Container {...rest}>
            <DetalhesCarro>
                <Marca>{carData.brand}</Marca>
                <Nome>{carData.name}</Nome>

                <SobreContainer>
                    <Alugar>
                        <AlugarPeriodo>{carData.period}</AlugarPeriodo>
                        <AlugarPreco>{`R$ ${carData.price}`}</AlugarPreco>
                    </Alugar>
                    <Tipo>
                        <MotorIcon />
                    </Tipo>
                </SobreContainer>
            </DetalhesCarro>
            <ImageCarro resizeMode="cover" source={{
                uri: carData.thumbnail
            }} />
        </Container>
    )
}