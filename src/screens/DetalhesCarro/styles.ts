import styled from 'styled-components/native'

export const Container = styled.View`
    flex:1;
    background-color: ${({theme})=>theme.colors.background_secondary};
`

export const Header = styled.View`
    position: absolute;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    margin-top: 18px;
    margin-left: 24px;

`
export const CarroImages = styled.View`
    margin-top: 32px;
`
