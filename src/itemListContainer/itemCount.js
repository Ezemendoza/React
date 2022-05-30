import { useState } from 'react';
import './itemCount.css';

const ItemCount = () =>{
    let [contador , setContador]= useState(1)

    const incrementar = ()=>{
        setContador(contador =contador + 1)
    }
   const resta = () =>{setContador(contador=contador -1)}
return <div className='row col-12'>
            <button onClick={incrementar} className="btn btn-primary col-4"> Comprar</button>
                <form className='col-6'>
                    <div className='col-12'>
                        <span onClick={resta}>-</span><input type="text" value={contador} className="col-6 text-center"/><span onClick={incrementar}>+</span>
    </div>
</form></div>}

export default ItemCount