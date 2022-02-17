import React, { useRef, useState } from 'react'
import { ViewToken } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'

import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarroImageContainer,
    CarroImage
} from './styles'


interface Props {
    imagesUrl: string[]
}

interface ChangeImageProps{
    viewableItems: ViewToken[]
    changed: ViewToken[]
}

export function ImageSlider({ imagesUrl }: Props) {
    const [imageIndex, setImageIndex] = useState(0)   
    const indexChanged = useRef((info: ChangeImageProps) => {
        const value = info.viewableItems.find(item=>item.isViewable===true)
        setImageIndex(value?.index!);
        console.log(value?.index);
    })
    
    return (
        <Container>
            <ImageIndexes>
                {imagesUrl.map((item, index) => (
                     <ImageIndex key={String(index)} active={index===imageIndex} />)
                )}
            </ImageIndexes>


            <FlatList
                data={imagesUrl}
                keyExtractor={(item,index)=>String(index)}
                onViewableItemsChanged={indexChanged.current}
                renderItem={({ item }) => (
                    <CarroImageContainer>
                        <CarroImage source={{ uri: item }} resizeMode='cover' />
                    </CarroImageContainer>
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            ></FlatList>



        </Container>
    )
}