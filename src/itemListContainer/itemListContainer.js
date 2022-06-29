import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const[loading, setLoading]=useState(true)
    
    const {categoriaId} = useParams();


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
    console.log(items)

    return (
        <div className="fondo">
        <h2 className="titulo-principal">Catalogo</h2>
        <Link to={"/categorias/lupa"}><button className="btn btn-primary">Lupa</button></Link>
        <Link to={"/categorias/tiraled"}><button className="btn btn-primary">Tira Led</button></Link>
    
        <hr/>
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