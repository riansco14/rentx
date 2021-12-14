import React from 'react'
import { DateCallbackHandler, LocaleConfig } from 'react-native-calendars';
import { Calendar as CalendarBase } from 'react-native-calendars'
import { Container } from './styles'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { ptBR } from './localConfig';

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br';

export interface MarkedDatesProps {
    [date: string]: {
        color: string
        textColor: string
        disabled?: boolean
        disableTouchEvent?: boolean
    }
}

export interface DayProps{
    dateString: string
    day: number
    month: number
    year: number
    timestamp: number
}

interface CalendarProps {
    markedDates: MarkedDatesProps
    onDayPress: DateCallbackHandler
}

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
    const theme = useTheme()


    function getDate(adicionarDia = 0) {
        const date = new Date()
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDay() + adicionarDia}`
    }

    const date = getDate()
    const dateEnd = getDate(1)

    return (
        <Container>
            <CalendarBase
                markingType={'period'}
                markedDates={markedDates}
                onDayPress={onDayPress}

                renderArrow={(direction) =>
                    <Feather
                        size={24}
                        color={theme.colors.text}
                        name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
                    />
                }

                headerStyle={{
                    backgroundColor: theme.colors.background_secondary,
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#000",
                    paddingBottom: 10,
                    marginBottom: 10
                }}

                theme={
                    {
                        textDayFontFamily: theme.fonts.primary_400,
                        textDayHeaderFontFamily: theme.fonts.primary_500,
                        textDayHeaderFontSize: 10,
                        textMonthFontFamily: theme.fonts.secondary_600,
                        textMonthFontSize: 20,
                        monthTextColor: theme.colors.title,
                        arrowStyle: {
                            marginHorizontal: -15
                        },
                    }
                }

                firstDay={1}
                minDate={new Date()}


            />

        </Container>
    )
}
