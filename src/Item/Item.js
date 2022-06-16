
import GaleriaItem from "../GaleriaItem/GaleriaItem"
import  "./Item.css"


const Item = ({item}) => {
    return (
       <div className="row contaner col-12">
          <GaleriaItem item={item} />
          </div>
    )
}

export default Item