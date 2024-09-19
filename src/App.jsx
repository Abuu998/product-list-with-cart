import Cart from "./components/Cart"
import ProductsList from "./components/ProductsList"


function App() {

	return (
		<div className="contain py-6">
			<div className="grid md:grid-cols-[1fr,_300px] gap-8">
				<ProductsList />
				<Cart />
			</div>
		</div>
	)
}

export default App
