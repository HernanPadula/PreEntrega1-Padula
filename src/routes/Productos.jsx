import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";

function Productos (){
    const [isLoading, setIsLoading] = useState(true);
    const [Productos, setProductos] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setProductos([...json]);
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

    return (<>
    <NavBar/>
    <div>Productos
        {Productos.map((producto) => (
        <article key={producto.id}>
            <Link key={producto.id} to={`/producto/${producto.id}`}>
                <h5>{producto.title}</h5>
                </Link>
            <p>{producto.description}</p>
        </article>
        ))}
    </div>
    </>);
};

export default Productos;