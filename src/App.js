
import './App.css';
import Menu from './navBar/navBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import {BrowserRouter,  Routes, Route} from "react-router-dom"
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { UbicacionNavbar } from './navBar/UbicacionNavbar';
import { ContactoNavbar } from './navBar/ContactoNavbar';


function App() {

  return ( 
  <BrowserRouter>
       <Menu/>
            <Routes>
           
            <Route path='/ubicacion' element={ <UbicacionNavbar/>}/>
            <Route path='/contacto' element={ <ContactoNavbar/>}/>
     
            <Route path='/' element={ <ItemListContainer/>}/>
            <Route path='/categorias/:categoriaId' element={ <ItemListContainer/>}/>          
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />  
           
            </Routes>
            
    </BrowserRouter>
  );
}

export default App;
