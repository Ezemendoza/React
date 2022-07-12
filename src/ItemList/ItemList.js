import Item from "../ItemDetail/ItemDetail"


const ItemList = ( {items} ) => {

    return (

            <div className="col-7 row flex-start">
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            
            }
                
            </div>
        
    )
}

export default ItemList