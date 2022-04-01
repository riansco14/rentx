import React, { useState, useEffect } from 'react'
import { Container, Content, Header, HeaderContent, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Carro } from '../../components/Carro'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'
import { CarroDTO } from '../../dtos/CarroDTO'
import { useTheme } from 'styled-components/native'
import { LoadError } from './components/LoadError'
import { FlatList } from 'react-native'
import { LoadAnimation } from '../../components/LoadAnimation'


export function Home() {
    const navigation = useNavigation()
    const theme = useTheme()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [carros, setCarros] = useState<CarroDTO[]>([])


    useEffect(() => {
        let isMounted = true;

        async function fetchCars() {
            try {
                if (isMounted) {
                    setError(false)
                    setLoading(true)
                }
                const response = await api.get("/cars")
                if (isMounted)
                    setCarros(response.data)
            } catch (error) {
                if(isMounted)
                    setError(true)
            } finally {
                if(isMounted)
                    setLoading(false)
            }
        }

        fetchCars()

        return () => {
            isMounted = false
        }
    }, [])


    function handleCarroDetalhes(carro: CarroDTO) {
        navigation.navigate("DetalhesCarro", { carro })
    }

    function handleMeusCarros() {
        navigation.navigate("MeusCarros")
    }

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)} />
                    <TotalCars>Total de {carros.length} carros</TotalCars>
                </HeaderContent>
            </Header>
            <Content>
                {error && <LoadError onPress={fetchCars} />}

                {!error &&
                    (loading ? <LoadAnimation /> :
                        <FlatList
                            data={carros}
                            keyExtractor={item => item.id}
                            renderItem={({ item }: { item: CarroDTO }) => (<Carro data={item} onPress={() => handleCarroDetalhes(item)} />)}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ padding: 24 }}

                        />)}
            </Content>
        </Container>
    )
}