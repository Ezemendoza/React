
const ItemCounter = ({item, counter, setCounter, agregar}) => {


      
    const incrementar = ()=>{
        if(counter<item)setCounter(counter=counter+1)
    }
    const restar = ()=>{
     if(counter>1)setCounter(counter=counter-1)
    
    }


    return (<div>
        <button onClick={restar} className="btn btn-primary">-</button><input type="number" value={counter} className=" text-center"/><button className="btn btn-primary" onClick={incrementar}>+</button>
      
             <button  className='btn btn-primary w-100' onClick={agregar}> Comprar</button>
             </div>

    )
}

export default ItemCounter