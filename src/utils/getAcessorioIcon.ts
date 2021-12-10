import AceleracaoSvg from '../assets/acceleration.svg'
import VelocidadeSvg from '../assets/speed.svg'
import GasolinaSvg from '../assets/gasoline.svg'
import EnergiaSvg from '../assets/energy.svg'
import HibridoSvg from '../assets/hybrid.svg'
import TorqueSvg from '../assets/force.svg'
import PessoasSvg from '../assets/people.svg'
import CambioSvg from '../assets/exchange.svg'
import CarroSvg from '../assets/car.svg'


export function getAcessorioIcon(type: string) {
    switch (type) {
        case 'speed':
            return VelocidadeSvg
        case 'acceleration':
            return AceleracaoSvg
        case 'turning_diameter':
            return TorqueSvg
        case 'gasoline_motor':
            return GasolinaSvg
        case 'electric_motor':
            return EnergiaSvg
        case 'hybrid_motor':
            return HibridoSvg
        case 'exchange':
            return CambioSvg
        case 'seats':
            return PessoasSvg
        default:
            return CarroSvg
    }

}