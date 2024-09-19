import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartProvider from './context/CartContext'
import ModalProvider from './context/ModalContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ModalProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ModalProvider>
	</StrictMode>,
)
