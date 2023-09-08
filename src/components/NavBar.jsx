
import "./NavBar.css";
import {CartWidget} from "./CartWidget";
import logo from "../assets/cart-icon.png"
import { Link } from "react-router-dom";

export function NavBar () {
    return <nav className="barraNav">
        <Link to="/">LOGO</Link>
        <Link to="/productos"><button>Productos</button></Link>
        <Link to="/categorias"><button>Categorias</button></Link>
        <Link to="/carrito"><img src={logo} alt="Logo carrito" className="logoCarrito"/>
        <CartWidget/>
        </Link>
    </nav>
};
