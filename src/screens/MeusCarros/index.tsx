import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'
import { Carro } from '../../components/Carro'
import { LoadAnimation } from '../../components/LoadAnimation'
import { CarroDTO } from '../../dtos/CarroDTO'
import api from '../../services/api'

import { Container, Content, Header, SubTitle, Title, Agendamentos, AgendamentosTitulo, AgendamentosQuantidade } from './styles'


interface CarroProps {
    id: string
    user_id: string
    car: CarroDTO
}

export function MeusCarros() {
    const navigation = useNavigation()
    const theme = useTheme()
    const [carros, setCarros] = useState<CarroProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchCarros() {
            try {
                const response = await api.get("/schedules_byuser?user_id=1")

                setCarros(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCarros()
    }, [])

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton color={theme.colors.shape} onPress={handleGoBack} />

                <Title>
                    Escolha uma data{'\n'}
                    data de ínicio e{'\n'}
                    fim do aluguel
                </Title>

                <SubTitle>
                    Conforto, segurança e praticidade
                </SubTitle>
            </Header>
            {loading ? (<LoadAnimation />) : (<Content>
                <Agendamentos>
                    <AgendamentosTitulo>Agendamentos feitos: </AgendamentosTitulo>
                    <AgendamentosQuantidade>05</AgendamentosQuantidade>
                </Agendamentos>
                <FlatList
                    data={carros}
                    keyExtractor={(item: CarroProps) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }: { item: CarroProps }) => <Carro data={item.car}></Carro>}
                />
            </Content>)}

        </Container>
    )
}