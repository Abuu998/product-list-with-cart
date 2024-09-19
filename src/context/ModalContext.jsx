import { createContext, useState, useContext } from "react";


const ModalContext = createContext()


function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)


    const values = {
        isOpen,
        open,
        close
    }

    return (
        <ModalContext.Provider value={values}>
            { children }
        </ModalContext.Provider>
    )
}

export default ModalProvider


export function useModal() {
    return useContext(ModalContext)
}