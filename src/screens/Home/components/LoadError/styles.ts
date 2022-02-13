import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const TitleWrapper = styled.View`
    width: 80%;
`;
export const Title = styled.Text`
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.title};
    text-align: center;
`
export const ButtonReload = styled.TouchableOpacity`
    margin-top: 24px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 4px;
`;

export const ButtonReloadTitle = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.shape};
`;