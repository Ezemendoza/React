import logo from '../logo.svg';
import './navBar.css';
import CartWidget from './CartWidget';

const Menu = () => {
    return <nav className="listaNavbar">
        
 <a
 href="https://reactjs.org"><img src={logo} className="App-logo" alt="logo" /></a>
    <ul className=" ml-5 listNavbar">
<li className="mt-3">Menu</li>
<li className='mt-3'>Contacto</li>
<li className='mt-3'>Ubicacion</li>
<li className='mr-4'><CartWidget /></li>
</ul>
</nav>
 }

export default Menu