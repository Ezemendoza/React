import './itemListContainer.css';
import logo from "../logo.svg";

import ItemCount from './itemCount';


const ItemListContainer = (props) => {
 

    return <div className="itemListContainer">

<div itemListContainer>
<h4>{props.titulo}</h4>
<img src={logo}/>
<h2>{props.precio}</h2>

<ItemCount/>

</div>
</div>
 }

export default ItemListContainer