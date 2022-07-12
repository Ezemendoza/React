import {  Routes, Route, Navigate} from "react-router-dom"
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { UbicacionNavbar } from '../navBar/UbicacionNavbar';
import { ContactoNavbar } from '../navBar/ContactoNavbar';
import {Checkout} from '../Checkout/Checkout'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Cart from '../Cart/cart';
import { Recuperarcontrasena } from "../User/RecuperarContrasena";
import Pagos from "../Pagos/Pagos";
import Tarjeta from "../Tarjeta/Tarjeta";

const RoutePrivado = () => {


  return ( 
                  <>
                    
                            <Routes>
                            <Route path='/' element={ <ItemListContainer/>}/>
                            <Route path='/ubicacion' element={ <UbicacionNavbar/>}/>
                            <Route path='/contacto' element={ <ContactoNavbar/>}/>
                            <Route path='/cart' element={ <Cart/>}/>
                            <Route path='/checkout' element={<Checkout/>} />
                            <Route path='*' element={ <Navigate to="/"/>}/>
                            <Route path='/categorias/:categoriaId' element={ <ItemListContainer/>}/>          
                            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />  
                            <Route path='/recuperarContrasena' element={<Recuperarcontrasena/>}/>
                            <Route path="/pagos" element={<Pagos/>}/>
                            <Route path="/tarjeta" element={<Tarjeta/>}/>
                            </Routes>
                </>
                   

  );
}

export default RoutePrivado

