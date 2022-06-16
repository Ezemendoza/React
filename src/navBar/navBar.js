import logo from '../logo.svg';
import './navBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const Menu = () => {
    return <nav className="listaNavbar">
        
        <Link to={"/"} className="mt-3 "><img src={logo} className="App-logo" alt="logo" /></Link>
    <ul className=" ml-5 listNavbar">
    <Link to={"/"} className="mt-3 palabra__lista">Inicio</Link>
    <Link to={"/contacto"} className="mt-3 palabra__lista">Contacto</Link>
    <Link to={"/ubicacion"} className="mt-3 palabra__lista">Ubicacion</Link>

    <Link to={"/cart"} className="mt-3 "><li className='mr-4'><CartWidget/></li></Link>
</ul>
</nav>
 }

export default Menu