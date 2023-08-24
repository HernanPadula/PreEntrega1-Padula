import { useEffect,useState } from "react";
import { NavBar } from "../components/NavBar";
import './CategoriasCards.css';
import { Link } from "react-router-dom";


function CatMensCloth () {
        const [isLoading, setIsLoading] = useState(true);
        const [Ropas, setRopas] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/men's clothing`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setRopas([...json]);
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
            <h1>Ropa de Hombres</h1>
        {Ropas.map((ropa) => (
        <article className="cardCat" key={ropa.id}>
            <img src={ropa.image} alt="imagen" />
            <Link key={ropa.id} to={`/producto/${ropa.id}`}>
                <h5>{ropa.title}</h5>
                </Link>
            <h3>{ropa.category}</h3>
            <p>{ropa.description}</p>
            <h4>$ {ropa.price}</h4>
        </article>
        ))}
        </div>
    );
};

export default CatMensCloth;