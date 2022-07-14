import logo from '../img/logo.png';
import './navBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Perfil } from './perfil';
import { Nav, Navbar } from "react-bootstrap";
const Menu = () => {
    const{cart} = useContext(CartContext)

    return <Navbar collapseOnSelect expand="lg" bg="danger" className='navbar-columna'>
      <Navbar >
      <Link to={"/"} className="mt-3 "><img src={logo} className="App-logo" alt="logo" /></Link>
      </Navbar>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
                <Link to={"/"} className="mt-3 palabra__lista">Inicio</Link>
                </Nav>
   
    <Nav className='row centrado'>
    <Link to={"/categoria/futbol"} className="mt-3 contenedor-carrito "> Futbol </Link> 
    <Link to={"/categoria/tiempo libre"} className="mt-3 contenedor-carrito "> Tiempo LIbre</Link> 
    <Link to={"/categoria/basquet"} className="mt-3 contenedor-carrito "> Basquet</Link> 
  
    </Nav>
      
      <Nav className='datos-navbar'>
    <Link to={"/cart"} className="mt-3 contenedor-carrito "><li className='mr-4'> 
    { (cart.length!==0) && <CartWidget/>  }</li></Link>
    <Perfil/>
    </Nav>
      </Navbar.Collapse>
      

    </Navbar>
      

 


 }

export default Menu    
