
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Login/Login'
import { User } from '../User/User'
import {Recuperarcontrasena} from '../User/RecuperarContrasena'


const RoutePublico = () => {

    return (
        <Routes>
           
            <Route path='/login' element={<Login/>}/>
            <Route path='/user' element={<User/>}/>
       
            <Route path='*' element={ <Navigate to="/login"/>}/>
         
        </Routes>
    )
}

export default RoutePublico