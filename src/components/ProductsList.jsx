import data from "../../data/data.json"
import ProductCard from "./ProductCard"

function ProductsList() {

    const cards = data.map(prod => <ProductCard key={prod.name} product={prod} />)

    return (
        <div>
            <h1 className="font-bold text-xl text-myrose-900">Desserts</h1>

            <div className="grid mt-6 gap-3 grid-rows-[1fr_auto_auto] grid-cols-[repeat(auto-fit,_minmax(min(200px,_100%),_1fr))]">
                { cards }
            </div>
        </div>
    )
}

export default ProductsList