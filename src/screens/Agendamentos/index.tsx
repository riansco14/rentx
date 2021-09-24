import React from 'react'
import { BackButton } from '../../components/BackButton'
import theme from '../../global/styles/theme'

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

export function Agendamentos() {
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

            </Content>

            <Footer>
                <Button title="Titulo" />
            </Footer>


        </Container>
    )
}