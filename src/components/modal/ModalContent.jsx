import orderConfirmed from "/assets/images/icon-order-confirmed.svg"
import { useCart } from "../../context/CartContext"
import ConfirmedOrderItem from "../ConfirmedOrderItem"
import Button from "../Button"
import { useModal } from "../../context/ModalContext"

function ModalContent() {
    const { cart, totalPrice, resetCart } = useCart()
    const { close } = useModal()

    const confirmedItems = cart.map(item => (
        <ConfirmedOrderItem key={`${item.name}-confirmed`} item={item} />
    ))

    return (
        <div className="bg-white p-4 rounded-lg max-sm:fixed inset-0 top-[10%]">
            <img src={orderConfirmed} alt="tick" className="w-10 aspect-square" />
            <h1 className="text-4xl font-bold text-myrose-900 text-balance mt-4">Order Confirmed</h1>
            <small className="text-sm text-myrose-400">We hope you enjoy your food</small>
            <div
                className="mt-6 bg-myrose-100 rounded-lg p-4 grid gap-4 divide-y h-80 w-full divide-myrose-300 overflow-hidden overflow-y-auto"
            >
                { confirmedItems }
                <div className="pt-2 text-sm flex items-center justify-between">
                    <span className="text-myrose-400">Order Total</span>
                    <span className="text-xl font-bold text-myrose-900">${totalPrice.toFixed(2)}</span>
                </div>
            </div>
            <Button
                className="bg-myred text-white text-sm mt-6 w-full p-2 rounded-full hover:bg-[#5f1c07]"
                onClick={() => {
                    resetCart()
                    close()
                }}
            >
                Start New Order
            </Button>
        </div>
    )
}

export default ModalContent