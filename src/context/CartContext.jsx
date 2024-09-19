import { createContext, useState, useContext, useEffect } from "react";


const CartContext = createContext();

const initialState = {
    cart: [],
    totalItems: 0,
    totalPrice: 0
}

function CartProvider({ children }) {
    const [state, setState] = useState(initialState)
    const [changed, setChanged] = useState(0)

    useEffect(() => {
        setState(prev => ({
            ...prev,
            totalItems: prev.cart.reduce((acc, item) => acc + item.quantity, 0),
            totalPrice: prev.cart.reduce((acc, item) => {
                const total = item.price * item.quantity
                return acc + total
            }, 0)
        }))
    }, [changed])

    const getRandomNum = () => Math.random()

    const addToCart = prod => {
        const exist = state.cart.find(p => p.name === prod.name)

        if(!exist) {
            setState(prev => ({
                ...prev,
                cart: [...prev.cart, {...prod, quantity: 1}]
            }))
            setChanged(getRandomNum())
            return
        }
        
        setState(prev => ({
            ...prev,
            cart: prev.cart.map(p => p.name === prod.name ? {...p, quantity: p.quantity + 1} : p)
        }))
        setChanged(getRandomNum())
    }

    const removeFromCart = name => {
        const exist = state.cart.find(p => p.name === name)

        if(!exist) {
            return
        }

        if(exist.quantity > 1) {
            setState(prev => ({
                ...prev,
                cart: prev.cart.map(p => p.name === name ? { ...p, quantity: p.quantity - 1 } : p)
            }))
            setChanged(getRandomNum())
        } else{
            setState(prev => ({
                ...prev,
                cart: prev.cart.filter(p => p.name !== name)
            }))
            setChanged(getRandomNum())
        }
    }

    const removeItem = name => {
        const exist = state.cart.find(p => p.name === name)

        if(!exist) {
            return
        }

        setState(prev => ({
            ...prev,
            cart: prev.cart.filter(p => p.name !== name)
        }))
        setChanged(getRandomNum())

    }

    const resetCart = () => {
        setState(initialState)
    }


    const values = {
        cart: state.cart,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
        addToCart,
        removeFromCart,
        removeItem,
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