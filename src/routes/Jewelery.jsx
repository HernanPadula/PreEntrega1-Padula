import { useEffect,useState } from "react";
import { NavBar } from "../components/NavBar";
import './CategoriasCards.css';
import { Link } from "react-router-dom";


function CatJoyas () {
        const [isLoading, setIsLoading] = useState(true);
        const [Joyas, setJoyas] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/jewelery`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setJoyas([...json]);
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
            <h1>Joyas</h1>
        {Joyas.map((joya) => (
        <article className="cardCat" key={joya.id}>
            <img src={joya.image} alt="imagen" />
            <Link key={joya.id} to={`/producto/${joya.id}`}>
                <h5>{joya.title}</h5>
                </Link>
            <h3>{joya.category}</h3>
            <p>{joya.description}</p>
            <h4>$ {joya.price}</h4>
        </article>
        ))}
        </div>
    );
};

export default CatJoyas;