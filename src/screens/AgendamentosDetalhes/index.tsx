import React, { useEffect, useState } from 'react'
import { Alert, ScrollView } from 'react-native'
import { Acessorio } from '../../components/Acessorio'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

import AceleracaoSvg from '../../assets/acceleration.svg'
import VelocidadeSvg from '../../assets/speed.svg'
import GasolinaSvg from '../../assets/gasoline.svg'
import EnergiaSvg from '../../assets/energy.svg'
import HibridoSvg from '../../assets/hybrid.svg'
import TorqueSvg from '../../assets/force.svg'
import PessoasSvg from '../../assets/people.svg'
import CambioSvg from '../../assets/exchange.svg'

import {
    CarroImages, Container, Header,
    Descricao,
    Detalhes,
    Marca,
    Nome,
    Alugar,
    AlugarPeriodo,
    AlugarPreco,
    Sobre,
    Footer,
    PeriodoAlguel, CalendarioIcon, DateInfo, DateTitulo, DateValor,
    AluguelPreco, AluguelPrecoLabel, AluguelPrecoDetalhes, AluguelPrecoParcelas, AluguelPrecoTotal
} from './styles'
import { Acessorios } from '../../components/Acessorio/styles'
import { Button } from '../../components/Button'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CarroDTO } from '../../dtos/CarroDTO'
import { getAcessorioIcon } from '../../utils/getAcessorioIcon'
import { format } from 'date-fns'
import { getPlataformDate } from '../../utils/getPlataformDate'
import api from '../../services/api'

interface Params {
    carro: CarroDTO
    dates: string[]
}

interface PeriodoAlguel {
    start: string
    end: string
}

export function AgendamentosDetalhes() {
    const theme = useTheme()
    const navigation = useNavigation()
    const route = useRoute()
    const [periodoAluguel, setPeriodoAluguel] = useState<PeriodoAlguel>({} as PeriodoAlguel)
    const { carro, dates } = route.params as Params

    const [loading, setLoading] = useState(false);

    const alguelTotal = Number(dates.length * carro.rent.price)

    useEffect(() => {
        setPeriodoAluguel({
            start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
        })
    }, [])

    async function handleConfirmarAluguel() {
        setLoading(true);
        try {
            const agendamentosByCar = await api.get(`/schedules_bycars/${carro.id}`)

            const datasIndisponiveis = [
                ...agendamentosByCar.data.unavailable_dates,
                ...dates,
            ]
            await api.post(`/schedules_byuser/`, {
                user_id: 1,
                car: carro
            })

            
            api.put(`/schedules_bycars/${carro.id}`, {
                id: carro.id,
                unavailable_dates: datasIndisponiveis
            }).then(() => navigation.navigate("Confirmacao", {
                titulo: 'Carro alugado!',
                mensagem: `Agora você só precisa ir {'\n'}
                até a concessionária da RENTX  {'\n'}
                pegar o seu automovel.`,
                nextScreenRoute: 'Home'
            })
            ).catch(() => Alert.alert("Não foi possível confirmar o agendamento."))
        } catch (error) {

        }




    }

    return (
        <Container>
            <Header>
                <BackButton onPress={() => console.log("Clicou")} />
            </Header>
            <CarroImages>

                <ImageSlider imagesUrl={carro.photos} />
            </CarroImages>



            <ScrollView
                contentContainerStyle={{ padding: 24, alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            >
                <Detalhes>
                    <Descricao>
                        <Marca>{carro.brand}</Marca>
                        <Nome>{carro.name}</Nome>
                    </Descricao>
                    <Alugar>
                        <AlugarPeriodo>{carro.rent.period}</AlugarPeriodo>
                        <AlugarPreco>R$ {carro.rent.price}</AlugarPreco>
                    </Alugar>
                </Detalhes>


                <Acessorios>
                    {carro.accessories.map((item) => {
                        return <Acessorio
                            key={item.name}
                            icon={getAcessorioIcon(item.type)}
                            titulo={item.name} />
                    })}
                </Acessorios>

                <PeriodoAlguel>
                    <CalendarioIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarioIcon>

                    <DateInfo>
                        <DateTitulo>
                            DE
                        </DateTitulo>

                        <DateValor>
                            {periodoAluguel.start}
                        </DateValor>
                    </DateInfo>

                    <DateInfo>
                        <DateTitulo>
                            DE
                        </DateTitulo>

                        <DateValor>
                            {periodoAluguel.end}
                        </DateValor>
                    </DateInfo>
                </PeriodoAlguel>

                <AluguelPreco>
                    <AluguelPrecoLabel>
                        Total
                    </AluguelPrecoLabel>

                    <AluguelPrecoDetalhes>
                        <AluguelPrecoParcelas>
                            R$ {carro.rent.price} x {Number(dates.length)} diárias
                        </AluguelPrecoParcelas>
                        <AluguelPrecoTotal>
                            R$ {alguelTotal}
                        </AluguelPrecoTotal>
                    </AluguelPrecoDetalhes>
                </AluguelPreco>



            </ScrollView>

            <Footer>
                <Button
                    title="Alugar agora"
                    color={theme.colors.sucess}
                    onPress={handleConfirmarAluguel}
                    enabled={!loading}
                    loading={loading}
                />
            </Footer>
        </Container>
    )
}