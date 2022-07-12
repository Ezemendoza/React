import { Person } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom';
import './navBar.css';
import {app} from "../firebase/config"
import { getAuth, signOut} from "firebase/auth";
import { UserContext } from '../UserContext/UserContext';
import { useContext } from 'react';

export const Perfil = ({}) => {
  const{setRegistrado} = useContext(UserContext)
 const auth = getAuth(app)

const cerrar = ()=>{
      auth.signOut()
      .then(()=>{
    setRegistrado(false)
  })

}

    return (
      <div>
        
    
          <Dropdown>
                    <Dropdown.Toggle className='mt-3 dropdown-navbar'  >
                    <Person/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                     <Link to={'/perfil'} className="dropdown-item">Mi perfil</Link>
                     <Link to={"/contacto"} className="dropdown-item"> Mis compras</Link>
                      <button onClick={ ()=> cerrar(auth)} className="dropdown-item"> Cerrar Sesion</button>
                    </Dropdown.Menu>
                  </Dropdown>

      </div>
    )
}

