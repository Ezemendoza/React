
import './App.css';
import Menu from './navBar/navBar';
import ItemListContainer from './itemListContainer/itemListContainer';

function App() {
  return ( 
  <div className="App">
       <Menu/> 
       
   <header className="App-header">

    <ItemListContainer titulo="Ajuar de 6 Piezas" precio="$5.000"/>
    <ItemListContainer titulo="Ajuar de 8 Piezas" precio="$7.500"/>
    <ItemListContainer titulo="Ajuar de 3 Piezas" precio="$2.500"/>
    <ItemListContainer titulo="Ajuar de 12 Piezas" precio="$14.500"/>

   
      </header>
    </div>
  );
}

export default App;
