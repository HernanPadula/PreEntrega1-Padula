import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext";


function AddToCart (title, id, price) {
    const cartContext = useContext(CartContext);
    console.log({cartContext});
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        if(isAdded) {
            cartContext.decrementCartQuantity();
        } else {   
        cartContext.incrementCartQuantity();
        cartContext.addProdToList(title, id, price);
        }
        setIsAdded(!isAdded);
    };

    return (
        <span>
            <button onClick={handleClick}>
                {isAdded ? "Eliminar del carrito" : "Agregar al carrito"}
            </button>
        </span>
    )
};

export default AddToCart