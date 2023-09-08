import { useContext } from "react";
import { NavBar } from "../components/NavBar";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


function Cart (){
    const {cartList} = useContext(CartContext);
    console.log({cartList});
    if (cartList.length === 0 ){
    return (
        <><NavBar/>
            <h2>Carrito de Compras</h2>
            <h3>Aun no hay nada en el carrito</h3>
            <Link to="/">volver al inicio</Link>
        </>
    );
    } else {
        return(
            <div>
            <NavBar/>
            <h2>Carrito de Compras</h2>
            {cartList.map((prod) =>(
                <article key={prod.id}>
                    <h3>{prod.title}</h3>
                    <h4>{prod.id}</h4>
                    <h3>$ {prod.price}</h3>
                </article>
            ))}
            </div>
        )};
};

export default Cart;