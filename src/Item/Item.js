import { useEffect, useState } from "react"
import  "./Item.css"

const Item = ({item}) => {


let [contador, setContador]=useState(1)

      
const incrementar = ()=>{

if(item.stock>0 ) (setContador(item.stock=item.stock-1)) 
else(contador=contador-1)
setContador(contador=contador+1)
}
const restar = ()=>{
 if(contador>0)setContador((item.stock=item.stock+1) && (contador=contador-1))

}



    return (
       <div className="row">
          <div className="card-item col-6">
          <h2 className="titulo-producto">{item.nombre}</h2>
          
         <img src={item.img} className="imagen-producto"/>
         <p>Ultimos {item.stock} disponible!</p>
         </div>
         <div className="col-4 descripcion">
       
          <h4>Precio: ${item.precio}</h4>
          <div>
              <span onClick={restar}>-</span><input type="number" value={contador} className="col-2 text-center"/><span onClick={incrementar}>+</span>
            <button onClick={incrementar} className='btn btn-primary' > Comprar</button>
          </div>
          </div>
          </div>
    
        
    )
}

export default Item