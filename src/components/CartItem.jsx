import Button from "./Button"

function CartItem({ item, removeItem=()=>{} }) {
    return (
        <div className="grid grid-cols-[1fr_auto] items-center py-4">
            <div className="font-semibold">
                <h2 className="font-bold text-lg text-myrose-500">{item.name}</h2>
                <div className="flex items-center gap-6">
                    <span className="text-myred">{item.quantity}x</span>
                    <span className="text-myrose-300 font-normal">@ ${item.price.toFixed(2)}</span>
                    <span className="text-myrose-400">${(item.quantity * item.price).toFixed(2)}</span>
                </div>
            </div>
            <Button
                className="border-myrose-500 hover:border-myrose-900 border border-solid w-4 aspect-square grid place-items-center rounded-full group"
                onClick={removeItem}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path fill="#CAAFA7" className="group-hover:fill-myrose-900" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                </svg>
            </Button>
        </div>
    )
}

export default CartItem