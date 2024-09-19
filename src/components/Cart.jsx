import { useCart } from "../context/CartContext"

function Cart() {
    const { totalItems } = useCart()

    return (
        <div className="bg-white p-4 rounded-lg self-start">
            <h2 className="text-myred font-bold text-xl">Your Cart ({totalItems})</h2>
        </div>
    )
}

export default Cart