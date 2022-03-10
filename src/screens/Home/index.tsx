import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Container, Content, Header, HeaderContent, TotalCars } from './styles'
import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Carro } from '../../components/Carro'
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'
import { CarroDTO } from '../../dtos/CarroDTO'
import { Load } from '../../components/Load'
import { useTheme } from 'styled-components/native'
import { LoadError } from './components/LoadError'
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated'
import { BackHandler, FlatList, StyleSheet } from 'react-native'

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export function Home() {
    const navigation = useNavigation()
    const theme = useTheme()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [carros, setCarros] = useState<CarroDTO[]>([])

    const positionY = useSharedValue(0);
    const positionX = useSharedValue(0);

    const myCarsButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionX.value },
                { translateY: positionY.value },
            ]
        }
    });

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(_, ctx: any) {
            ctx.positionX = positionX.value;
            ctx.positionY = positionY.value;
        },
        onActive(event, ctx: any) {
            positionX.value = ctx.positionX + event.translationX;
            positionY.value = ctx.positionY + event.translationY;
        },
        onEnd() {
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);

        }
    });

    async function fetchCars() {
        try {
            setError(false)
            setLoading(true)
            const response = await api.get("/cars")
            setCarros(response.data)

        } catch (error) {
            console.log(error);
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCars()
    }, [])

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
    })

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
                    (loading ? <Load /> :
                        <FlatList
                            data={carros}
                            keyExtractor={item => item.id}
                            renderItem={({ item }: { item: CarroDTO }) => (<Carro data={item} onPress={() => handleCarroDetalhes(item)} />)}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ padding: 24 }}

                        />)}
            </Content>
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={[
                        myCarsButtonStyle,
                        {
                            position: 'absolute',
                            bottom: 13,
                            right: 22
                        }
                    ]}
                >
                    <ButtonAnimated
                        onPress={handleMeusCarros}
                        style={[styles.button, { backgroundColor: theme.colors.main }]}
                    >
                        <Ionicons
                            name="ios-car-sport"
                            size={32}
                            color={theme.colors.shape}
                        />
                    </ButtonAnimated>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

})