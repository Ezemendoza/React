import logo from '../logo.svg';
import './navBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Perfil } from './perfil';

const Menu = () => {
    const{cart, totalPrecio, carritoVacio, removeItem} = useContext(CartContext)

    return <nav className="listaNavbar">
        
        <Link to={"/"} className="mt-3 "><img src={logo} className="App-logo" alt="logo" /></Link>
    <ul className=" ml-5 listNavbar">
    <Link to={"/"} className="mt-3 palabra__lista">Inicio</Link>
    <Link to={"/contacto"} className="mt-3 palabra__lista">Contacto</Link>
    <Link to={"/ubicacion"} className="mt-3 palabra__lista">Ubicacion</Link>

    <Link to={"/cart"} className="mt-3 contenedor-carrito "><li className='mr-4'> 
    { (cart.length!==0) && <CartWidget/>  }</li></Link>
    <Perfil/>
 
</ul>
</nav>
 }

export default Menu