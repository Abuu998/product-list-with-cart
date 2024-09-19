import { createContext, useState, useContext } from "react";


const CartContext = createContext();


function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0)


    const addToCart = prod => {
        const exist = cart.find(p => p.name === prod.name)

        if(!exist) {
            setCart([...cart, {...prod, quantity: 1}])
            setTotalItems(prev => prev + 1)
            return
        }

        setCart(cart.map(p => p.name === prod.name ? {...p, quantity: p.quantity + 1} : p))
        setTotalItems(prev => prev + 1)
    }

    const removeFromCart = name => {
        const exist = cart.find(p => p.name === name)

        if(!exist) {
            return
        }

        if(exist.quantity > 1) {
            setCart(cart.map(p => p.name === name ? { ...p, quantity: p.quantity - 1 } : p))
            setTotalItems(prev => prev - 1)
        } else{
            setCart(cart.filter(p => p.name !== name))
            setTotalItems(prev => prev - 1)
        }
    }

    const resetCart = () => setCart([])



    const values = {
        cart,
        totalItems,
        addToCart,
        removeFromCart,
        resetCart
    }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider


export const useCart = () => {
    return useContext(CartContext)
}