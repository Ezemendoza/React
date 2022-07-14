
import { Routes, Route, Navigate } from 'react-router-dom'
import Compras from '../Compras/Compras'
import Login from '../Login/Login'
import { User } from '../User/User'


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