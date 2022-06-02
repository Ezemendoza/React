import Item from "../Item/Item"



const ItemList = ( {items} ) => {

    return (
        <div>
            <h2>Catalogo</h2>
            <hr/>
            <div className="row">
            {
                items.map((item) => <Item key={item.id} item={item}/>)
            }
            </div>
        </div>
    )
}

export default ItemList