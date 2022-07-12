import { Link } from "react-router-dom"
import {BotonCounterPrincipal } from "../User/Elementos"

const TerminarCompra = () => {

    return (
        <div>
          
          <BotonCounterPrincipal><Link to="/cart" className="text-white">Terminar mi compra</Link></BotonCounterPrincipal>
        </div>
    )
}

export default TerminarCompra