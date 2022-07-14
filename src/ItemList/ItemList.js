import Item from "../ItemDetail/ItemDetail"


const ItemList = ( {items} ) => {

    return (

            <div className="row justify-content-center previsualizacion">
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            
            }
                
            </div>
        
    )
}

export default ItemList