
import "./NavBar.css";
import {CartWidget} from "./CartWidget";
import logo from "../assets/cart-icon.png"

export function NavBar () {
    return <nav className="barraNav">
        <h4>LOGO</h4>
        <button>Juegos</button>
        <button>Categorias</button>
        <button>Ofertas</button>
        <button>Contacto</button>
        <img src={logo} alt="Logo carrito" className="logoCarrito"/>
        <CartWidget items={12}/>
    </nav>
};
