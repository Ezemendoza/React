import { useContext } from 'react'
import carrito from '../carrito.png'
import { CartContext } from '../CartContext/CartContext'

const CartWidget = () => {
const{cart} = useContext(CartContext)
    return (
   <div><img src={carrito}/><span className='contador-carrito'>{cart.length}</span></div>

   
        
 )}

export default CartWidget