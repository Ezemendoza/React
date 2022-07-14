import { Person } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown'
import './navBar.css';
import {app} from "../firebase/config"
import { getAuth} from "firebase/auth";
import { UserContext } from '../UserContext/UserContext';
import { useContext } from 'react';

export const Perfil = () => {
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
                    <Dropdown.Toggle className='mt-3 dropdown-navbar btn'  >
                    <Person/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                
                      <button onClick={ ()=> cerrar(auth)} className="dropdown-item"> Cerrar Sesion</button>
                    </Dropdown.Menu>
                  </Dropdown>

      </div>
    )
}

