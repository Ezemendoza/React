import { UserContext } from "../UserContext/UserContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { useContext } from "react";

export const Recuperarcontrasena = () => {
  const{ email, auth} = useContext(UserContext)
  console.log(email,auth)
  
  sendPasswordResetEmail(auth, email)
  .then(() => {

  })
  .catch((error) => {
  

  });

  return (
    <div>
         <h1>Registrate</h1>
        
          <button onClick={sendPasswordResetEmail}> Enviar </button>
    </div>
);
}

