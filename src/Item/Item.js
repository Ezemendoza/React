import { useEffect, useState } from "react"


const Item = ({item}) => {


let [contador, setContador]=useState(0)
      console.log(contador)
      
const incrementar = ()=>{

if(item.stock>0 ) (setContador(item.stock=item.stock-1)) 
else(contador=contador-1)
setContador(contador=contador+1)


}


const restar = ()=>{
 if(contador>0)setContador((item.stock=item.stock+1) && (contador=contador-1))

}



    return (
        <div>
            <h2>{item.nombre}</h2>
           <img src={item.img}/>
            <p>Ultimos {item.stock} disponible!</p>
            <h4>Precio: ${item.precio}</h4>
            <div>
                <span onClick={restar}>-</span><input type="number" value={contador} className="col-1 text-center"/><span onClick={incrementar}>+</span>
              <button onClick={incrementar} className='btn btn-primary' > Comprar</button>
            </div>


        </div>
        
    )
}

export default Item