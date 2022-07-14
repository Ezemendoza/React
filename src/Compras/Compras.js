import { collection,getDocs, query, where} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { UserContext } from "../UserContext/UserContext";
import ItemCompras from "./ItemCompras";


const Compras = ()=>{
    const{email}=useContext(UserContext)

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        const productos= collection(db, "ordenes")
        const q = query(productos, where("email", "==", email.campo)) 
        getDocs(q)
            .then((resp)=>{
                const newItem= resp.docs.map((el)=> {return{
                    id:el.id,
                    ...el.data()
                }
                    
                })
               setPosts(newItem)})
              
    }, [])



    return(
            <div>
               <div className="item-compra-columna">
                <h1>Mis compras</h1>
            {
                posts.map((orden) =>   <ItemCompras key={orden.id} item={orden}/>)
            
            }
                
            </div>
            </div>
    )
}
export default Compras