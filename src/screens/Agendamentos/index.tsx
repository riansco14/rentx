import React from 'react'

import theme from '../../global/styles/theme'
import { BackButton } from '../../components/BackButton'
import {
    Container, Header,
    Title,
    PeriodoAluguel,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer
} from './styles'



import ArrowSvg from '../../assets/arrow.svg'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'
import { useNavigation } from '@react-navigation/native'

export function Agendamentos() {
    const navigation = useNavigation()

    function handleConfirmarAluguel() {
        navigation.navigate("AgendamentosDetalhes")
    }

    return (
        <Container>
            <Header>
                <BackButton color={theme.colors.shape} onPress={() => console.log("Clicou")} />

                <Title>
                    Escolha uma data{'\n'}
                    data de ínicio e{'\n'}
                    fim do aluguel
                </Title>

                <PeriodoAluguel>
                    <DateInfo>
                        <DateTitle>
                            DE
                        </DateTitle>
                        <DateValue selected={false}>
                            18/01/2021
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>
                            DE
                        </DateTitle>
                        <DateValue selected={false}>
                            18/01/2021
                        </DateValue>
                    </DateInfo>

                </PeriodoAluguel>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button title="Confirmar" onPress={handleConfirmarAluguel} />
            </Footer>


        </Container>
    )
}