import React, { useState } from 'react'

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
import { Calendar, DayProps, MarkedDatesProps } from '../../components/Calendar'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { generateInterval } from '../../components/Calendar/generateInterval'

export function Agendamentos() {
    const navigation = useNavigation()
    const theme = useTheme()

    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)

    function handleConfirmarAluguel() {
        navigation.navigate("AgendamentosDetalhes")
    } 
    function handleChangeDate(day: DayProps) {
        let start = !lastSelectedDate.timestamp ? day : lastSelectedDate
        let end = day
        if (start.timestamp > end.timestamp) {
            let tmp = start
            start = end
            end = tmp
        }
        setLastSelectedDate(end)

        const interval = generateInterval(start, end)
        setMarkedDates(interval)
            
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
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button title="Confirmar" onPress={handleConfirmarAluguel} />
            </Footer>


        </Container>
    )
}