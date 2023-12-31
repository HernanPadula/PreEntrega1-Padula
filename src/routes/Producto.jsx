import './Producto.css';
import {useContext, useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import AddToCart from '../components/AddToCartBtn';


function Producto () {

    const parametros = useParams();
        const [isLoading, setIsLoading] = useState(true);
        const [Producto, setProducto] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${parametros.productoId}`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setProducto([json]);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    } ,[]);

    if(isLoading)
    return (
        <div>
            <h3>Cargando...</h3>
        </div>
        );
    
    return (
        <div>
            <NavBar></NavBar>
        {Producto.map((producto) => (
        <article className="detalleProducto" key={producto.id}>
            <h4>{producto.id}</h4>
            <h2>{producto.title}</h2>
            <img src={producto.image} alt="imagen" />
            <h3>{producto.category}</h3>
            <h4>{producto.description}</h4>
            <h4>$ {producto.price}</h4>
            <AddToCart title={producto.title} id={producto.id} price={producto.price}/>
        </article>
        ))}
        </div>
    );
};

export default Producto;