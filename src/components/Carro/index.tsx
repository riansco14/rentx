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

import GasolinaSvg from '../../assets/gasoline.svg'
import { RectButtonProps } from 'react-native-gesture-handler'
import { CarroDTO } from '../../dtos/CarroDTO';
import { getAcessorioIcon } from '../../utils/getAcessorioIcon';


interface Props extends RectButtonProps {
    data: CarroDTO
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
                        <AlugarPeriodo>{carData.rent.period}</AlugarPeriodo>
                        <AlugarPreco>{`R$ ${carData.rent.price}`}</AlugarPreco>
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