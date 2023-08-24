import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";

function Categorias () {
    return (
        <>
        <NavBar/>
        <h2>categorias</h2>
        <Link to="/categoria/ropaDeHombre"><button>Ropa de hombres</button></Link>
        <br />
        <Link to="/categoria/ropaDeMujeres"><button>Ropa de mujeres</button></Link>
        <br />
        <Link to="/categoria/electronica"><button>Electronica</button></Link>
        <br />
        <Link to="/categoria/joyeria"><button>Joyas</button></Link>
        </>
    )
};

export default Categorias;