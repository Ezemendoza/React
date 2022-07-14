import {  Routes, Route, Navigate} from "react-router-dom"
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import {Checkout} from '../Checkout/Checkout'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Cart from '../Cart/cart';
import { Recuperarcontrasena } from "../User/RecuperarContrasena";
import Pagos from "../Pagos/Pagos";
import Tarjeta from "../Tarjeta/Tarjeta";
import Compras from "../Compras/Compras";
import ItemCompras from "../Compras/ItemCompras";
import ItemCompraDetalle from "../Compras/ItemCompras";

const RoutePrivado = () => {


  return ( 
                  <>
                    
                            <Routes>
                            <Route path='/' element={ <ItemListContainer/>}/>
                            <Route path='/cart' element={ <Cart/>}/>
                            <Route path='/checkout' element={<Checkout/>} />
                            <Route path='*' element={ <Navigate to="/"/>}/>
                            <Route path='/categoria/:categoriaId' element={ <ItemListContainer/>}/>          
                            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />  
                            <Route path='/recuperarContrasena' element={<Recuperarcontrasena/>}/>
                            <Route path="/pagos" element={<Pagos/>}/>
                            <Route path="/tarjeta" element={<Tarjeta/>}/>
                            <Route path="/miscompras" element={<Compras/>}/>
                            </Routes>
                </>
                   

  );
}

export default RoutePrivado

