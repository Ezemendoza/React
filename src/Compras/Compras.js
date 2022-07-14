import { collection,getDocs} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import ItemCompras from "./ItemCompras";


const Compras = ()=>{
    

    const [posts, setPosts] = useState([]);

    useEffect( () => {
    const buscar =  getDocs(collection(db, 'ordenes')).
    then((resp)=>{
        const item= resp.docs.map((el)=> {return{
            id:el.id,
            ...el.data(),
        }
            
    })
 setPosts(item)})
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