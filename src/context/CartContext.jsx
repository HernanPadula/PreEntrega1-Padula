import { createContext, useState } from "react";

export const CartContext = createContext([]);

function CartProvider ({children}) {
    const[cartQuantity,setCartQuantity] = useState(0);
    const[cartList, setCartList] = useState([]);

    const incrementCartQuantity = () => {
        setCartQuantity(cartQuantity + 1);
    };
    const decrementCartQuantity = () => {
        decrementCartQuantity(cartQuantity - 1);
    };

    const addProdToList = (prod) => {
        setCartList([...cartList,prod])
    };

    const removeProdFromList = prodId => {
        const newProds = cartList.filter(prod => prod.id !== prodId)
        setCartList(newProds);
    };

    return (
    <CartContext.Provider value={{
        cartQuantity: cartQuantity,
        incrementCartQuantity,
        decrementCartQuantity,
        addProdToList,
        removeProdFromList,
        cartList,
    }}>
        {children}
    </CartContext.Provider>);
};

export default CartProvider;
