import { UserContext } from "../UserContext/UserContext";
import { useContext,  useEffect,  useState } from "react";
import ComponenteInput from "./Input";
import { Label } from "./Elementos";
import { collection, doc, getDocs, query, where,update, writeBatch, addDoc} from "firebase/firestore";
import { db } from "../firebase/config";
import { faL } from "@fortawesome/free-solid-svg-icons";



export const Recuperarcontrasena = () => {
  const{ email,cambiarEmail,expresiones, nombre, usuario, cambiarNombre,cambiarUsuario, password, cambiarPassword} = useContext(UserContext)
  
const [mostrar, setMostrar] = useState(false)
const [editar, setEditar] = useState(false)

const onChangeTerminos = (e) => {
  setMostrar(e.target.checked)
}





const sisi =()=>{
  const batch = writeBatch(db)
  const productos= collection(db, "usuarios")
  const q = query(productos, where("email", "==", email)) 
  getDocs(q)
      .then((resp)=>{    
      resp.forEach((el)=>{
      
    if(el.data().email == email.campo){

      batch.update(el.ref,{nombre:nombre.campo,
      usuario:usuario.campo,
    password:password.campo})
     
    }

    if(editar==false){
      setEditar(true)
  
    }else{
      setEditar(false)
    }
      })
      batch.commit()
      })

}

        



      
  return (
    <div>
         <h1  className="item-compra-columna mb-4">Mi Perfil</h1>
         <div className="division-entregas justify-content-center">
    <div className="div-contacto ">    
    <div className="grupo-contacto">
            <ComponenteInput
              estado={nombre}
              cambiarEstado={cambiarNombre}
              tipo="text"
              label="Nombre"
              placeholder="Ezequiel"
              name="nombre"
              leyendaError="Introduce tu nombre"
              expresionRegular={expresiones.nombre}
              required="required" 
					      />
           
              <ComponenteInput
              estado={usuario}
              cambiarEstado={cambiarUsuario}
              tipo="text"
              label="Usuario"
              placeholder="Ezemendoza"
              name="apellido"
              leyendaError="Introduce tu usuario"
              expresionRegular={expresiones.nombre}
              required="required" 
					      />
                
      </div>
       
         <div className="grupo-contacto">
          
            <ComponenteInput
              estado={email}
              cambiarEstado={cambiarEmail}
              tipo="text"
              label="Nombre"
              placeholder="Ezequielmendoza99@gmail.com"
              name="email"
              leyendaError="Introduce tu email"
              expresionRegular={expresiones.email}
              required="required" 
					      />
       
       <div>
        
              <ComponenteInput
              estado={password}
              cambiarEstado={cambiarPassword}
              tipo={mostrar ? "text":"password"}
              label="Contraseña"
              placeholder="Contraseña"
              name="apellido"
              leyendaError="Contraseña invalida"
              expresionRegular={expresiones.password}
              
					      />
              

               <Label> 
                  <input type="checkbox" name="terminos" id="terminos"  checked={mostrar} onChange={onChangeTerminos} />
                  Mostrar Contraseña
                </Label>
                
              
                            
                <button className="boton-compra" onClick={sisi}>{editar ? "Editar mi perfil":"Confirmar"}</button>
                </div>
                
             </div>
     
             
     
      
      
      </div>
      </div>


    </div>
);
}

