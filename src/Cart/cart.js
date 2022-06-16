import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext";
import "./Cart.css"

const Cart = ({}) => {
    const{cart, totalPrecio, carritoVacio, removeItem} = useContext(CartContext)

    return (
       <div className="row cartMenu">

        <div className="col-7">
      { 
             cart.map((item) => ( 
                    <div key={item.id} className="col-12 row itemMenu">
                   
                        <img src={item.img} className="col-3" />
                        <h5 className="col-3">{item.nombre}</h5>
                        <p className="col-3"> cantidad:{item.cantidad}</p>
                        <h6 className="col-2">precio:{item.precio}</h6>
                        <h2>total:${item.precio*item.cantidad}</h2>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger">Eliminar</button>
                        <hr/>
                    </div>
  
      ))
      }
       </div>
                 <div className="col-5">
                         <h3>total:${totalPrecio()}</h3>
                         <button onClick={carritoVacio} className="btn btn-danger"> vaciar todo</button>
                </div>
           
        </div>
    )
}

export default Cart