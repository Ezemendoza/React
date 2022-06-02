
import './App.css';
import Menu from './navBar/navBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return ( 
  <div className="App">
       <Menu/> 
       
   <header className="App-header">

    <ItemListContainer/>


   
      </header>
    </div>
  );
}

export default App;
