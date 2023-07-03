import CartWidget from "../CartWidget/CartWidget";
import LogoSharkTCG from '../NavBar/assets/logo/LogoSharkTCG.png';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <nav>
            <img src={LogoSharkTCG} alt= "Logo Shark TCG" />
            <div>
                <Button variant="outline-primary">Preventas</Button>
                <Button variant="outline-primary">Juego de Cartas</Button>
                <Button variant="outline-primary">Accesorios</Button>
                <Button variant="outline-primary">Mayoreo</Button>
                <Button variant="outline-primary">Ubicacion</Button>
                <Button variant="outline-primary">Contacto</Button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;