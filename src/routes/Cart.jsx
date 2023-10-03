import { useContext, useState } from "react";
import { NavBar } from "../components/NavBar";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, doc,} from "firebase/firestore";
import { firestore } from "../fireBase/firebase";

const refOrdenes = collection(firestore, "ordenes");

const docRef = doc(firestore, "ordenes", "UuWaO0OKTt8QnJ7ojs1A");

function Cart (){
    const {cartList} = useContext(CartContext);

    const {orderId,setOrderId} = useState(null);

    const handelClickCompra = () => {
        const itemsList = {
            items: cartList.map(item => ({id: item.id, price: item.price,title: item.title}))
        };
        addDoc(refOrdenes,itemsList).then((item)=>{setOrderId(item.id)});
    };

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
            ))};
            <button onClick={handelClickCompra}>Finalizar Compra</button>
            </div>
        )};
        
};




export default Cart;