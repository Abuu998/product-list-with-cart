import Cart from "./components/Cart"
import Modal from "./components/modal/Modal"
import ModalContent from "./components/modal/ModalContent"
import ProductsList from "./components/ProductsList"


function App() {

	return (
		<div className="contain py-6">
			<div className="grid md:grid-cols-[1fr,_300px] gap-8">
				<ProductsList />
				<Cart />
			</div>
			<div className="attribution mt-8">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
				Coded by <a href="https://github.com/Abuu998">NDUWIMANA Abubakar</a>.
			</div>
			<Modal>
				<ModalContent />
			</Modal>
		</div>
	)
}

export default App
