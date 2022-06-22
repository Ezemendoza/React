import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import TerminarCompra from "./TerminarCompra"



const ItemCounter = ({item, counter, setCounter, agregar, descripcion}) => {
    const{cart, totalPrecio, carritoVacio, removeItem} = useContext(CartContext)

    const incrementar = ()=>{
        if(counter<item)setCounter(counter=counter+1)
    }
    const restar = ()=>{
     if(counter>1)setCounter(counter=counter-1)
    
    }
    console.log(descripcion)
    console.log(cart)
    
    const sisi = cart.some((el)=>el.id=== descripcion.id)
 if(sisi) return <TerminarCompra/>
    return (<div>
        <button onClick={restar} className="btn btn-primary">-</button><input type="number" value={counter} className=" text-center"/><button className="btn btn-primary" onClick={incrementar}>+</button>
      
             <button  className='btn btn-primary w-100' onClick={agregar}> Comprar</button>
             </div>

    )
}

export default ItemCounter