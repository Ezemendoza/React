import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext";
import CarritoVacio from "./CarritoVacio";
import "./Cart.css"


const Cart = ({}) => {
    const{cart, totalPrecio, carritoVacio, removeItem} = useContext(CartContext)
  
    if(cart.length === 0 ) return <CarritoVacio/>

    return (
       <div className="row cartMenu ">

        <div className="col-8 ">
            
      { 
             cart.map((item) => ( 
             <div key={item.id} className="row itemMenu card col-10">
                            <div className="col-5">
                                            <img src={item.img} className="imagenCart" />
                                           
                            </div>
                         <div className=" row detalleMenu col-7">
                            <div className="row">
                                    <h5 className="col-8">{item.nombre}</h5>
                                     <h6 className="col-2">${item.precio*item.cantidad}</h6>
                                    <span onClick={() => removeItem(item.id)} className="btn col-1 ">X</span>
                            </div>
                                   
                         
                            <h5 className="col-3"> cantidad:{item.cantidad}</h5>
                               
                   
                                    
                        </div>
                   
             </div>
  
      ))
      }
       </div>
                 <div className="col-4 compra row">
                         <h3 className="col-6">total:${totalPrecio()}</h3>
                         <div className="col-6">
                         <button onClick={carritoVacio} className="btn btn-danger col-5"> vaciar todo</button>
                         </div>
                </div>
           
        </div>
    )
}

export default Cart