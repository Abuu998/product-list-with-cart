import { useCart } from "../context/CartContext"
import Button from "./Button"
import CarbonNeutralSvg from "./CarbonNeutralSvg"
import CartItem from "./CartItem"
import EmptyCartSvg from "./EmptyCartSvg"

function Cart() {
    const { totalItems, totalPrice, cart, removeItem } = useCart()

    const cartItems = cart.map(item => (
        <CartItem key={item.name} item={item} removeItem={() => removeItem(item.name)} />
    ))

    return (
        <div className="bg-white p-4 rounded-lg self-start">
            <h2 className="text-myred font-bold text-xl">Your Cart ({totalItems})</h2>
            <div className="mt-4">
                { totalItems < 1 ? (
                    <div className="grid place-items-center">
                        <EmptyCartSvg />
                        <small className="text-xs text-myrose-500 font-semibold mt-4">Your added items will appear here</small>
                    </div>
                ) : (
                    <>
                        <div className="divide-y-2 divide-myrose-100">
                            { cartItems }
                        </div>
                        <div className="py-6 border-t-2 border-solid border-t-myrose-100 flex items-center justify-between">
                            <span className="text-myrose-400 font-semibold">Order Total</span>
                            <span className="text-3xl font-bold text-myrose-900">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="text-myrose-400 text-sm flex items-center justify-center gap-2 p-2 rounded-md bg-myrose-100">
                            <CarbonNeutralSvg />
                            <small>This is a <span className="font-bold text-myrose-500">carbon-neutral</span> delivery</small>
                        </div>
                        <Button
                            className="bg-myred text-white text-sm mt-6 w-full p-2 rounded-full hover:bg-[#5f1c07]"
                            onClick={() => {}}
                        >
                            Confirm Order
                        </Button>
                    </>
                ) }
            </div>
        </div>
    )
}

export default Cart