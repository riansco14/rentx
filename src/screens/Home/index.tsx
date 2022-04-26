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
import { Button, FlatList } from 'react-native'
import { LoadAnimation } from '../../components/LoadAnimation'
import { useNetInfo } from '@react-native-community/netinfo'
import { synchronize } from '@nozbe/watermelondb/sync'
import { database } from '../../databases'
import { Car as ModelCar } from '../../databases/model/Car'


export function Home() {
    const navigation = useNavigation()
    const theme = useTheme()
    const [loading, setLoading] = useState(true)
    const [reloading, setReloading] = useState(true)
    const [error, setError] = useState(false)
    const [carros, setCarros] = useState<ModelCar[]>([])

    useEffect(() => {
        let isMounted = true;

        async function fetchCars() {
            try {
                if (isMounted) {
                    setError(false)
                    setLoading(true)
                }
                const carCollection = database.get<ModelCar>('cars')
                const cars = await carCollection.query().fetch()
                if (isMounted)
                    setCarros(cars)
            } catch (error) {
                if (isMounted)
                    setError(true)
            } finally {
                if (isMounted)
                    setLoading(false)
            }
        }

        fetchCars()

        return () => {
            isMounted = false
        }
    }, [reloading])


    async function offlineSynchronize() {
        await synchronize({
            database,
            pullChanges: async ({lastPulledAt}) => {
                const response = await api.get(`/cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`)
                const { changes, latestVersion } = response.data
                console.log("Sincronização ONLINE", latestVersion)
                return {changes, timestamp: latestVersion}
            },
            pushChanges: async ({ changes }) => {
                console.log("Sincronização DADOS OFFLINE", changes)
                if (changes && changes.users) {
                    const user = changes.users;
                    console.log(JSON.stringify(user))
                    await api.post(`/users/sync`, user).catch(console.log)
                }

            }
        
        });
    }



    function handleCarroDetalhes(carro: ModelCar) {
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
            <Button title='Sincronizar' onPress={()=>offlineSynchronize()}></Button>
            <Content>
                {error && <LoadError onPress={() => setReloading(prevState => !prevState)} />}

                {!error &&
                    (loading ? <LoadAnimation /> :
                        <FlatList
                            data={carros}
                            keyExtractor={item => item.id}
                            renderItem={({ item }: { item: ModelCar }) => (<Carro data={item} onPress={() => handleCarroDetalhes(item)} />)}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ padding: 24 }}

                        />)}
            </Content>
        </Container>
    )
}