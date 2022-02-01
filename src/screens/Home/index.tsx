import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Container, Header, HeaderContent, MeusCarrosFloatButton, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Carro } from '../../components/Carro'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'
import { CarroDTO } from '../../dtos/CarroDTO'
import { Load } from '../../components/Load'
import { useTheme } from 'styled-components/native'


export function Home() {
    const navigation = useNavigation()
    const theme = useTheme()
    const [loading, setLoading] = useState(true)
    const [carros, setCarros] = useState<CarroDTO[]>([])



    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get("/cars")
                setCarros(response.data)

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        fetchCars()
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
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderContent>
            </Header>

            {
                loading ? <Load /> :
                    <FlatList
                        data={carros}
                        keyExtractor={item => item.id}
                        renderItem={({ item }: { item: CarroDTO }) => (<Carro data={item} onPress={() => handleCarroDetalhes(item)} />)}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ padding: 24 }}

                    />}
            
            <MeusCarrosFloatButton onPress={handleMeusCarros}>
                <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
            </MeusCarrosFloatButton>
        </Container>
    )
}