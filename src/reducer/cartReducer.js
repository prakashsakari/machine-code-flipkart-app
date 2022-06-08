export const cartReducer = (cartState,  {type, payload}) => {
    switch (type){
        case "ADD_TO_CART":
            return {
                ...cartState,
                cart: [...cartState.cart, {...payload, quantity: 1}]
            }
        
        case "INCREMENT":
            return {
                ...cartState,
                cart: cartState.cart.map(product => product._id === payload ? {...product, quantity: product.quantity+1} : product)
            }
        
        case "DECREMENT":
            return {
                ...cartState,
                cart: cartState.cart.map(product => product._id === payload ? {...product, quantity: product.quantity-1} : product)
            }
        
        case "REMOVE":
            return {
                ...cartState,
                cart: cartState.cart.filter(product => product._id !== payload),
                saveLater: cartState.saveLater.filter(product => product._id !== payload)
            }
        
        case "SAVE_LATER":
            return {
                ...cartState,
                saveLater: [...cartState.saveLater, payload.product],
                cart: cartState.cart.filter(product => product._id !== payload.itemId),
            }
        
        case "MOVE_TO_CART":
            return {
                ...cartState,
                cart: [...cartState.cart, payload],
                saveLater: cartState.saveLater.filter(product => product._id !== payload._id)
            }
        
        default:
            return cartState
    }
}