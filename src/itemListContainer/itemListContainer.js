import { pedirDatos } from "../datos/pedirDatos"
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList"



const ItemListContainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        pedirDatos()
            .then((resp) => {
                setItems( resp )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
          
    }, [])
    return (
        
        <ItemList items={items}/>
       
    )
}


export default ItemListContainer