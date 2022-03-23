import { Dimensions } from 'react-native'
import styled from 'styled-components/native'


export const Container = styled.View`
    width: 100%;
`
export const ImageIndexes = styled.View`
    flex-direction: row;
    align-self: flex-end;
    padding-right: 24px;
`

export const CarroImageContainer = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;

    justify-content: center;
    align-items: center;
`
export const CarroImage = styled.Image`
    width: 280px;
    height: 132px;
`