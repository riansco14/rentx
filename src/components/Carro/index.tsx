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


interface CarroData{
    marca: string
    nome: string
    alugar: {
        periodo: string
        preco: number
    }
    thumbnail: string
}

interface Props{
    data: CarroData
}


export function Carro({ data }: Props) {
    const carData = {
        marca: "audi",
        nome: "Coupé",
        alugar: {
            periodo: "ao dia",
            preco: 120
        },
        thumbnail: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Audi-S5.png"
    } as CarroData

    data = carData

    return (
        <Container>
            <DetalhesCarro>
                <Marca>{data.marca}</Marca>
                <Nome>{data.nome}</Nome>

                <SobreContainer>
                    <Alugar>
                        <AlugarPeriodo>{data.alugar.periodo }</AlugarPeriodo>
                        <AlugarPreco>{`R$ ${data.alugar.preco}` }</AlugarPreco>
                    </Alugar>
                    <Tipo>
                        <GasolinaSvg />
                    </Tipo>
                </SobreContainer>
            </DetalhesCarro>
            <ImageCarro resizeMode="cover" source={{
                uri: data.thumbnail
            }} />
        </Container>
    )
}