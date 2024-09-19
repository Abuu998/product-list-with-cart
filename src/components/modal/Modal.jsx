import { useModal } from "../../context/ModalContext"


function Modal({ children }) {
    const { isOpen, close } = useModal()

    return isOpen && (
        <div 
            className="fixed inset-0 bg-black/35 grid place-items-center"
            onClick={() => close()}
        >
            {children}
        </div>
    )
}

export default Modal