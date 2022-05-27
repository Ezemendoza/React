import logo from '../logo.svg';
import './navBar.css';
import CartWidget from './CartWidget';

const Menu = () => {
    return <div className="listaNavbar">
 <a
 href="https://reactjs.org"><img src={logo} className="App-logo" alt="logo" /></a>
    <ul className="listNavbar ">
<li className="mt-3">Menu</li>
<li className='mt-3'>Contacto</li>
<li className='mt-3'>Ubicacion</li>
<li ><CartWidget /></li>
</ul>
</div>
 }

export default Menu