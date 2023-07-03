import CartWidget from "../CartWidget/CartWidget";
import LogoSharkTCG from '../NavBar/assets/logo/LogoSharkTCG.png';

const NavBar = () => {
    return (
        <nav>
            <img src={LogoSharkTCG} alt= "Logo Shark TCG" />
            <div>
                <button>Preventas</button>
                <button>Juego de Cartas</button>
                <button>Accesorios</button>
                <button>Mayoreo</button>
                <button>Ubicacion</button>
                <button>Contacto</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;