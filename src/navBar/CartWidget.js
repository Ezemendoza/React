import { useContext } from 'react'
import carrito from '../carrito.png'
import { CartContext } from '../CartContext/CartContext'

const CartWidget = () => {
const{cart, totalPrecio, carritoVacio, removeItem} = useContext(CartContext)
    return <img src={carrito}/>
 }

export default CartWidget