import { transform } from '@babel/core'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, interpolate, Extrapolate, runOnJS } from 'react-native-reanimated'
import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'
import { Container } from './styles'


export function Splash() {
    const navigation = useNavigation()

    const splashAnimation = useSharedValue(0)

    const splashStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value,
                [0, 50],
                [1, 0],
            ),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [0, -50],
                        Extrapolate.CLAMP
                    )
                }
            ]
        }
    })
    
    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value,
                [0, 25, 50],
                [0, 0.3 , 1],
            ),
            transform: [{
                translateX: interpolate(splashAnimation.value,
                    [0, 50],
                    [-50, 0]
                )
            }]
        }
    })

    function startApp() {
        navigation.navigate('Login')
    }

    useEffect(() => {
        splashAnimation.value = withTiming(50, { duration: 1500 }, () => {
            'worklet'
            runOnJS(startApp)()
        })
    }, [])
    


    return (
        <Container>
            <Animated.View style={[splashStyle, {position: 'absolute'}]}>
                <BrandSvg width={80} height={50}></BrandSvg>
            </Animated.View>

            <Animated.View style={[logoStyle, {position: 'absolute'}]}>
                <LogoSvg width={180} height={20}></LogoSvg>
            </Animated.View>
        </Container>
    )
}
