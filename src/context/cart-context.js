import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({children}) => {

    const [{cart, saveLater}, cartDispatch] = useReducer(cartReducer, {
        cart: [],
        saveLater: [],
    })
    return (
        <CartContext.Provider value={{cart, cartDispatch, saveLater}}>{children}</CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider }