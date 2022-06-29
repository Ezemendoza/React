
import './App.css';
import Menu from './navBar/navBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import {BrowserRouter,  Routes, Route} from "react-router-dom"
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { UbicacionNavbar } from './navBar/UbicacionNavbar';
import { ContactoNavbar } from './navBar/ContactoNavbar';
import { CartProvider } from './CartContext/CartContext';
import Cart from './Cart/cart';
import { UserProvider } from './UserContext/UserContext';


function App() {

  return ( 
    <UserProvider>
        <CartProvider>
                  <BrowserRouter>
                      <Menu/>
                            <Routes>
                          
                            <Route path='/ubicacion' element={ <UbicacionNavbar/>}/>
                            <Route path='/contacto' element={ <ContactoNavbar/>}/>
                            <Route path='/cart' element={ <Cart/>}/>
                            <Route path='/' element={ <ItemListContainer/>}/>
                            <Route path='/categorias/:categoriaId' element={ <ItemListContainer/>}/>          
                            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />  
                          
                            </Routes>
                            
                    </BrowserRouter>
        </CartProvider>
    </UserProvider>
  );
}

export default App;
