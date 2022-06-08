import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [{cart, quantity, saveLater}, cartDispatch] = useReducer(cartReducer, {
        cart: [],
        saveLater: [],
        quantity: 1
    })

    return (
        <CartContext.Provider value={{cart, cartDispatch, saveLater}}>{children}</CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider }