import React, { useRef, useState } from 'react'
import { ViewToken } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import { Bullet } from '../Bullet';

import {
    Container,
    ImageIndexes,
    CarroImageContainer,
    CarroImage
} from './styles'


interface Props {
    imagesUrl: {
        id: string, photo: string
    }[]
}

interface ChangeImageProps {
    viewableItems: ViewToken[]
    changed: ViewToken[]
}

export function ImageSlider({ imagesUrl }: Props) {
    const [imageIndex, setImageIndex] = useState(0)
    const indexChanged = useRef((info: ChangeImageProps) => {
        const value = info.viewableItems.find(item => item.isViewable === true)
        setImageIndex(value?.index!);
    })

    return (
        <Container>
            <ImageIndexes>
                {imagesUrl.map((item, index) => (
                    <Bullet key={String(item.id)} active={index === imageIndex} />)
                )}
            </ImageIndexes>


            <FlatList
                data={imagesUrl}
                keyExtractor={(item) => String(item.id)}
                onViewableItemsChanged={indexChanged.current}
                renderItem={({ item }) => (
                    <CarroImageContainer>
                        <CarroImage source={{ uri: item.photo }} resizeMode='contain' />
                    </CarroImageContainer>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            ></FlatList>



        </Container>
    )
}