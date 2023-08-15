import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";

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
            <h2>Producto</h2>
        <article>
            <h3>{Producto.title}</h3>
            <h3>{Producto.category}</h3>
            <h4>{Producto.description}</h4>
        </article>
        </div>
    );
};

export default Producto;