import { createContext, useState } from "react";



export const UserContext = createContext()
export const UserProvider =({children})=>{

    const datos = [{mail:"ezequielmendoza99@gmail.com", 
    }]
    const [user, setUser]=useState([])


    return(<UserContext.Provider value={{ }}>
        {children}
</UserContext.Provider>)
}
