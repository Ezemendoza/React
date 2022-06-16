import { pedirDatos } from "../datos/pedirDatos"
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const[loading, setLoading]=useState(true)
    
    const {categoriaId} = useParams();

    
    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((resp) => {
                if (!categoriaId) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.categoria === categoriaId) )
                }
            })
            .catch((error) => {
              
            })
            .finally(()=>{
                setLoading(false)
            })
          
    }, [categoriaId])

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