
import "./NavBar.css";
import {CartWidget} from "./CartWidget";

export function NavBar () {
    return <nav className="barraNav">
        <h4>LOGO</h4>
        <button>Juegos</button>
        <button>Categorias</button>
        <button>Ofertas</button>
        <button>Contacto</button>
        <CartWidget items={12}/>
    </nav>
};
