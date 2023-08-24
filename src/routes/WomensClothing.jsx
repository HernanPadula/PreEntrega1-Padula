import { useEffect,useState } from "react";
import { NavBar } from "../components/NavBar";
import './CategoriasCards.css';
import { Link } from "react-router-dom";


function CatRopaMujeres () {
        const [isLoading, setIsLoading] = useState(true);
        const [RopasM, setRopasM] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/women's clothing`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setRopasM([...json]);
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
            <h1>Ropa Mujeres</h1>
        {RopasM.map((ropaM) => (
        <article className="cardCat" key={ropaM.id}>
            <img src={ropaM.image} alt="imagen" />
            <Link key={ropaM.id} to={`/producto/${ropaM.id}`}>
                <h5>{ropaM.title}</h5>
                </Link>
            <h3>{ropaM.category}</h3>
            <p>{ropaM.description}</p>
            <h4>$ {ropaM.price}</h4>
        </article>
        ))}
        </div>
    );
};

export default CatRopaMujeres;