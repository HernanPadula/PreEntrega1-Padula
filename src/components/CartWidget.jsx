import { useContext } from "react"
import { CartContext } from "../context/CartContext";

export function CartWidget (){
    const cartContext = useContext(CartContext);
    return <div>{cartContext.cartQuantity}</div>
}
