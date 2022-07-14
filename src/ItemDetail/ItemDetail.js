import { Link } from "react-router-dom"
import "./ItemDetail.css"
const ItemDetail = ({item}) => {


    return (
        
        <div className="card-item-lista">
     <Link to={`/item/${item.id}`} className="card-item-estilo">
  
        <img src={item.img} className="img-item-lista"/>
   
        <h6 className="precio-item-detail">${item.precio}</h6>
            <p className=" mb-0 categoria-item-detail">{item.nombre}</p></Link>
        <p className="text-muted categoria-item-detail">{item.categoria}</p>
  
    </div>
    )
}

export default ItemDetail