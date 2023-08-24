import { useEffect,useState } from "react";
import { NavBar } from "../components/NavBar";
import './CategoriasCards.css';
import { Link } from "react-router-dom";


function CatElectronics () {
        const [isLoading, setIsLoading] = useState(true);
        const [Electronicos, setElectronicos] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/electronics`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                setElectronicos([...json]);
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
            <h1>Electronicos</h1>
        {Electronicos.map((electronico) => (
        <article className="cardCat" key={electronico.id}>
            <img src={electronico.image} alt="imagen" />
            <Link key={electronico.id} to={`/producto/${electronico.id}`}>
                <h5>{electronico.title}</h5>
                </Link>
            <h3>{electronico.category}</h3>
            <p>{electronico.description}</p>
            <h4>$ {electronico.price}</h4>
        </article>
        ))}
        </div>
    );
};

export default CatElectronics;