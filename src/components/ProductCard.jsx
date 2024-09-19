import { useCart } from "../context/CartContext"
import Button from "./Button"

function ProductCard({ product }) {
    const { cart, addToCart, removeFromCart } = useCart()

    const existProd = cart.find(prod => prod.name === product.name)

    const existStyles = !existProd ? "bg-white text-myrose-900 outline-1 outline outline-myrose-900 hover:outline-myred" : "bg-myred text-white"
    const imgExistStyles = existProd && "outline-1 outline outline-myred"

    return (
        <div className="grid grid-cols-4 gap-y-0 grid-rows-subgrid row-span-3">
            <picture
                className={`block col-span-full rounded-lg overflow-hidden ${imgExistStyles}`}
            >
                <source media="(min-width: 648px)" srcSet={product.image.tablet} />
                <source media="(min-width: 768px)" srcSet={product.image.desktop} />

                <img src={product.image.mobile} alt={`${product.name} image`} className="block" />
            </picture>
            <div 
                className={`col-span-full justify-self-center rounded-full -mt-5 select-none ${existStyles}`}
            >
                {
                    !existProd ?(
                        <span className="flex items-center gap-3 justify-center py-2 px-4 cursor-pointer" onClick={() => addToCart(product)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" className="fill-white" viewBox="0 0 21 20">
                                <g fill="#C73B0F" clipPath="url(#a)">
                                    <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/>
                                    <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M.333 0h20v20h-20z"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <small>Add to Cart</small>
                        </span>
                    ) : (
                        <span className="flex items-center gap-6 justify-center py-2 px-4">
                            <Button
                                className="border-white border-solid border w-4 aspect-square grid place-items-center rounded-full hover:bg-white transition-colors duration-500 ease-in-out group"
                                onClick={() => removeFromCart(product.name)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                                    <path fill="#fff" className="group-hover:fill-myred" d="M0 .375h10v1.25H0V.375Z"/>
                                </svg>
                            </Button>
                            <small>{existProd && existProd.quantity}</small>
                            <Button
                                className="border-white border border-solid w-4 aspect-square grid place-items-center rounded-full hover:bg-white transition-colors duration-500 ease-in-out group"
                                onClick={() => addToCart(product)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                                    <path fill="#fff" className="group-hover:fill-myred" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                                </svg>
                            </Button>
                        </span>
                    )
                }
            </div>
            <div className="col-span-full mt-2">
                <small className="text-xs text-myrose-500">{product.category}</small>
                <p className="text-sm text-myrose-900 font-semibold">{product.name}</p>
                <p className="text-sm text-myred font-semibold">${product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ProductCard