
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Boton, Formulario, Enlace, Label} from "../User/Elementos";
import ComponenteInput from "../User/Input";
import { UserContext } from "../UserContext/UserContext";
import "./Login.css"


const Login = () => {
    const{auth,setRegistrado,email, password, expresiones,cambiarEmail, cambiarPassword} = useContext(UserContext)
    const [errores, setErrores] = useState(false)
    const [mostrar, setMostrar] = useState(false)
    const onChangeTerminos = (e) => {
     
      setMostrar(e.target.checked)
    }
    const entrar =(e,email, password)=>{
     
      e.preventDefault()
 
      if(e){

        signInWithEmailAndPassword(auth, email, password)
        .then((credencial)=>{const user= credencial.user
           if(user.uid.length>1){ setRegistrado(true)} }
          ).catch(error => {
           console.log(AuthErrorCodes)
            if (error.code === 'auth/user-not-found') {
              setErrores("No se encuentra ninguna cuenta asociada a este email")         
            }
            if (error.code === 'auth/invalid-email') {
              setErrores("Email invalido")         
            }
            if (error.code === 'auth/wrong-password') {
              setErrores("El email o la contraseña es incorrecto")         
            }
            if (error.code === 'auth/user-not-found"') {
              setErrores("No hay ninguna cuenta registrado con este email")         
            }
            if (error.code === 'auth/too-many-requests') {
              setErrores("Se ha bloqueado temporalmente el ingreso a esta cuenta debido a la reiteracion de ingresos fallidos")         
            }
           
           
          });

      }
    
    
  

 
        
       }
      

    return (
      <div>

        <h1 className="iniciar-Sesion">Inicia Sesion</h1>
        <Formulario>
        <ComponenteInput
              estado={email}
              cambiarEstado={cambiarEmail}
  
              tipo="text"
              label="Email"
              placeholder="Email"
              name="email"
              leyendaError="Email"
              expresionRegular={expresiones.email}
					      />
              <ComponenteInput
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo={mostrar ? "text":"password"}
              label="Password"
              placeholder="Password"
              name="password"

              expresionRegular={expresiones.password}
					      />
               <Label> 
                  <input type="checkbox" name="terminos" id="terminos"  checked={mostrar} onChange={onChangeTerminos} />
                  Mostrar Contraseña
                </Label>
                
            {errores && <div className="text-danger">{errores}</div> }
            <br/>
        <Boton onClick={(e)=>entrar(e, email.campo, password.campo)}> Iniciar Sesion
        
        </Boton>
        <Enlace>
              <Link to={'/recuperarContrasena'} className="text-primary">Olvide mi contraseña</Link>
             <Link to={"/user"} className="text-primary">¿No te has registrado?</Link>
         </Enlace>
        </Formulario>

                   

      
      </div>
    )
}

export default Login