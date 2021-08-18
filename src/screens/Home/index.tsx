import React from 'react'

import { Container, Header, HeaderContent, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Carro } from '../../components/Carro'
import { FlatList } from 'react-native-gesture-handler'


export function Home() {
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)} />
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderContent>
            </Header>


            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                keyExtractor={item => String(item)}
                renderItem={(item) => (<Carro data={item as any} />)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 24 }}
            
            />
        </Container>
    )
}