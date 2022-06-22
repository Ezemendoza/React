import { Link } from "react-router-dom"
import "./ItemDetail.css"
const ItemDetail = ({item}) => {


    return (
        <div className="card-item-lista">
        <h2>{item.nombre}</h2>
        <img src={item.img} className="img-item-lista"/>
   
        <h4>Precio: ${item.precio}</h4>
        <Link to={`/item/${item.id}`}><button className="btn btn-primary my-2">Ver más</button> </Link>
        
        <hr/>
    </div>
    )
}

export default ItemDetail