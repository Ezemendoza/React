import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import {db} from "../firebase/config"
import "./Checkout.css"
import {BsArrowRight} from "react-icons/bs";



export const Checkout =()=>{

    const {cart, totalPrecio} =  useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const nuevaOrden = async () =>{
            const orden ={
                items: cart.map(({id,cantidad,nombre,precio})=>({id,cantidad,nombre,precio})),
                total:totalPrecio()
            }
    
        const batch = writeBatch(db)
        const ordersRef = collection (db, "ordenes")
        const productosRef= collection(db, "productos")
        const q= query(productosRef,where(documentId(), `in`, cart.map((el)=>el.id)))
        
        const sinStock= []
        const productos = await getDocs(q)

        productos.docs.forEach((doc)=>{
            const agregarProductos =cart.find(prod=>prod.id===doc.id)
            if((doc.data().stock - agregarProductos.stock) >= 0){
                batch.update(doc.ref,{stock:doc.data().stock-agregarProductos.cantidad})
            }
            else{
                sinStock.push(agregarProductos)
            }
        })

    
    if(sinStock.length===0){
        addDoc(ordersRef,orden)
             .then((doc)=>{
              
                setOrderId(doc.id)
                  batch.commit()
                
        })
    }
    else{
        console.log("sin stock")
    }

    }
    
    

    return(
        <div>
            <h3> 
              
                <button className="boton-compra"  onClick={nuevaOrden}><p className="texto-boton">Ir a pagar </p><BsArrowRight/></button>
              
            </h3>
        </div>
    )


}
