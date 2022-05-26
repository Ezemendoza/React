import logo from '../logo.svg';
import './navBar.css';


const Menu = () => {
    return <div className="listaNavbar">
 <a
 href="https://reactjs.org"><img src={logo} className="App-logo" alt="logo" /></a>
    <ul className="listNavbar">
<li>Menu</li>
<li>Contacto</li>
<li>Ubicacion</li>
<li className="entrar"></li>
</ul>
</div>
 }

export default Menu