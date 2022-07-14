import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { Spinner } from "react-bootstrap";
import {useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const[loading, setLoading]=useState(true)
    
    const {categoriaId} = useParams();
console.log(categoriaId)

    useEffect(() => {
        setLoading(true)
            const productos= collection(db, "productos")
            const q = categoriaId ? query(productos, where("categoria", "==", categoriaId)) : productos
            getDocs(q)
                .then((resp)=>{
                    const newItem= resp.docs.map((el)=> {return{
                        id:el.id,
                        ...el.data()
                    }
                        
                    })
                   setItems(newItem)})
          .finally(()=>{
            setLoading(false)
          })
    }, [categoriaId])
   

    return (
        <div className="fondo">
        
        <h2 className="titulo-principal">Catalogo</h2>
        
                    
            
                {loading
                ?
                <Spinner animation="border" role="status">
                <p className="visually-hidden">Loading...</p>
                </Spinner>
                 :<ItemList items={items}/>
                    
            }
                
          
       </div>
    )
}


export default ItemListContainer