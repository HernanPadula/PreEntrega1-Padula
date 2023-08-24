
import './App.css';
import {NavBar} from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer Greeting="Bienvenido a mi pagina, presiona el boton <PRODUCTOS> para ver la lista de productos"/>
    </>
  )
};

export default App
