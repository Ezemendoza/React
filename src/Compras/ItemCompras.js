
import "./Compras.css"

const ItemCompras = ({item}) => {


    return (
        
        <div className="item-compras">
        <h3 className="titulo-item-compra"><strong>Orden N°: {item.id}</strong></h3>


        <p className="p-descripcion-item-compras"> <strong>Entregado a {item.NombreEntrega} {item.apellidoEntrega} en la calle {item.calle} en la localidad de {item.Localidad} en la provincia de {item.Pronvincia} correspondiente al codigo postal {item.CP} </strong></p>
      <h5><strong>Listado de Productos Comprados</strong></h5>


      {item.items.map(el=>
        <div className="div-row-item-compras">
                <div>
                <img src={el.img} className="item-compra-img"/>
                </div>
                <div className="div-texto-item-compras">
                    <p className="p-item-compras"><strong>Id del producto: </strong>{el.id}</p>
                    <p className="p-item-compras"><strong>Producto: </strong>{el.nombre}</p>
                    <p className="p-item-compras"><strong>Precio:</strong> $ {el.precio} </p>
                    <p className="p-item-compras"><strong>Cantidad:</strong> {el.cantidad} </p>
        </div>
        </div>
        )}
        <p className="total-item-compras"><strong>Total: </strong> ${item.total}</p>
    </div>
    )
}

export default ItemCompras