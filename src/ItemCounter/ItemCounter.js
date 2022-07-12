import {  useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { BotonCounter, BotonCounterPrincipal} from "../User/Elementos"
import TerminarCompra from "./TerminarCompra"



const ItemCounter = ({item, agregar, descripcion,counter, setCounter}) => {
    const{cart} = useContext(CartContext)

    const incrementar = ()=>{
      if(counter<item)setCounter(counter=counter+1)
  }
  const restar = ()=>{
   if(counter>1)setCounter(counter=counter-1)
  
  }
    const sisi = cart.some((el)=>el.id=== descripcion.id)
  
          return (
            <div className="ml-4 ">
                  <BotonCounter onClick={restar}>-</BotonCounter>
                                                        <input type ="number" value={counter}/> {item.cantidad}
                                                        <BotonCounter onClick={incrementar}>+</BotonCounter>  
                    {sisi ? <TerminarCompra/>: <BotonCounterPrincipal onClick={agregar}> Comprar</BotonCounterPrincipal>}
           
             </div>

    )
}

export default ItemCounter