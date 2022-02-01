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
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { generateInterval } from '../../components/Calendar/generateInterval'
import { getPlataformDate } from '../../utils/getPlataformDate'
import { format } from 'date-fns'
import { Alert } from 'react-native'
import { CarroDTO } from '../../dtos/CarroDTO'

interface PeriodoAluguel {
    start: number
    startFormatted: string
    end: number
    endFormatted: string
}


interface Params {
    carro: CarroDTO
}

export function Agendamentos() {
    const navigation = useNavigation()
    const route = useRoute()
    const { carro } = route.params as Params

    const theme = useTheme()

    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)
    const [periodoAluguel, setPeriodoAluguel] = useState<PeriodoAluguel>({} as PeriodoAluguel)

    function handleConfirmarAluguel() {
        navigation.navigate("AgendamentosDetalhes", { carro, dates: Object.keys(markedDates)})
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

        const firstDate = Object.keys(interval)[0]
        const lastDate = Object.keys(interval)[Object.keys(interval).length - 1]
        setPeriodoAluguel({
            start: start.timestamp,
            startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            end: end.timestamp,
            endFormatted: format(getPlataformDate(new Date(lastDate)), 'dd/MM/yyyy'),
        })

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
                        <DateValue selected={!!periodoAluguel.endFormatted}>
                            {periodoAluguel.startFormatted}
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>
                            DE
                        </DateTitle>
                        <DateValue selected={!!periodoAluguel.endFormatted}>
                            {periodoAluguel.endFormatted}
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
                <Button enabled={!!periodoAluguel.startFormatted} title="Confirmar" onPress={handleConfirmarAluguel} />
            </Footer>


        </Container>
    )
}