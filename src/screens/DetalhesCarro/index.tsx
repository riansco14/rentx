import React from 'react'
import { ScrollView, StatusBar, StyleSheet } from 'react-native'
import { Acessorio } from '../../components/Acessorio'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

import {
    CarroImages, Container, Header,
    Descricao,
    Detalhes,
    Marca,
    Nome,
    Alugar,
    AlugarPeriodo,
    AlugarPreco,
    Sobre,
    Footer
} from './styles'
import { Acessorios } from '../../components/Acessorio/styles'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { useRoute } from '@react-navigation/native'
import { CarroDTO } from '../../dtos/CarroDTO'
import { getAcessorioIcon } from '../../utils/getAcessorioIcon'
import { useTheme } from 'styled-components'
import { debounce } from 'lodash'

interface Params {
    carro: CarroDTO
}

export function DetalhesCarro() {
    const navigation = useNavigation()
    const theme = useTheme()
    const route = useRoute()
    const { carro } = route.params as Params

    const scrollY = useSharedValue(0)

    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y
    })

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 200],
                [200, 70],
                Extrapolate.CLAMP)
        }
    })

    const sliderCarsStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 150],
                [1, 0],
                Extrapolate.CLAMP)
        }
    })


    function handleConfirmarAluguel() {
        navigation.navigate("Agendamentos", { carro })
    }

    function handleGoBack() {
        navigation.goBack()
    }

    

    return (
        <Container>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <Animated.View style={[
                headerStyleAnimation,
                styles.header,
                { backgroundColor: theme.colors.background_secondary }
            ]}>
                <Header>
                    <BackButton onPress={debounce(handleGoBack,500)} />
                </Header>
                <CarroImages>
                <Animated.View style={sliderCarsStyleAnimation}>
                    <ImageSlider imagesUrl={carro.photos} />
                    </Animated.View>
                    </CarroImages>
            </Animated.View>

            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: 160
                }}
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={32}
            >
                <Detalhes>
                    <Descricao>
                        <Marca>{carro.brand}</Marca>
                        <Nome>{carro.name}</Nome>
                    </Descricao>
                    <Alugar>
                        <AlugarPeriodo>{carro.rent.period}</AlugarPeriodo>
                        <AlugarPreco>R$ {carro.rent.price}</AlugarPreco>
                    </Alugar>
                </Detalhes>


                <Acessorios>
                    {carro.accessories.map((item) => {
                        return <Acessorio
                            key={item.name}
                            icon={getAcessorioIcon(item.type)}
                            titulo={item.name} />
                    })}

                </Acessorios>
                <Sobre>
                    {carro.about}
                    {carro.about}
                    {carro.about}
                    {carro.about}
                    {carro.about}
                    {carro.about}
                    {carro.about}
                    {carro.about}

                </Sobre>
            </Animated.ScrollView>

            <Footer>
                <Button
                    title="Escolher período de aluguel"
                    onPress={debounce(handleConfirmarAluguel, 500)} />
            </Footer>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1
    }
})