import './itemListContainer.css';
import logo from "../logo.svg";


const ItemListContainer = (props) => {
 
    return <div className="itemListContainer">

<div itemListContainer>
<h4>{props.titulo}</h4>
<img src={logo}/>
<h2>{props.precio}</h2>
</div>
</div>
 }

export default ItemListContainer