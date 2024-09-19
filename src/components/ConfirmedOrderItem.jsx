

function ConfirmedOrderItem({ item }) {
    return (
        <div className="text-xs flex items-center gap-2 pt-4">
            <img src={item.image.thumbnail} alt={`${item.name} thumbnail`} className="w-14 aspect-square rounded-md" />
            <div className="font-semibold flex items-center gap-2 w-full">
                <div className="grid">
                    <h2 
                        className="font-bold text-sm text-myrose-500 whitespace-nowrap overflow-hidden text-ellipsis w-[min(9rem,_100%)]"
                    >
                        {item.name}
                    </h2>
                    <div className="flex items-center gap-6">
                        <span className="text-myred">{item.quantity}x</span>
                        <span className="text-myrose-300 font-normal">@ ${item.price.toFixed(2)}</span>
                    </div>
                </div>
                <span className="text-myrose-400 ml-auto justify-self-end">${(item.quantity * item.price).toFixed(2)}</span>
            </div>
        </div>
    )
}

export default ConfirmedOrderItem