import { createContext, useState } from "react";



export const CartContext = createContext()
export const CartProvider =({children})=>{

    const [cart, setCart]=useState([])




const addCart = (item)=>{

    const igual = retorno()
 const ok= sumar(item)

 if(cart.length===0){setCart([ ...cart, item])} else{
 
     if(igual !==true){setCart([ ...cart, item])}
     else{ cart.map((el)=>{if(el.cantidad>item.stock){el.cantidad=item.stock } else if(el.id===ok.id){ el.cantidad= el.cantidad+item.cantidad}})}
  
}
function retorno() {
    return cart.some((el)=>el.id==item.id)
}
}

const totalPrecio =()=>{
    return cart.reduce((acc, prod)=>acc+=(prod.cantidad*prod.precio),0)
}

const carritoVacio= () => {
    setCart( [] )
  }

const removeItem = (id) => {
      setCart( cart.filter((prod) => prod.id !== id) )
  }


function sumar(item){
    return cart.find((el)=>el.id==item.id)
}



    return(<CartContext.Provider value={{ cart ,addCart, totalPrecio, carritoVacio, removeItem, }}>
                 {children}
    </CartContext.Provider>)
}