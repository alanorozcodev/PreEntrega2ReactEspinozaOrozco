import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Llegaste a la mejor tienda de cartas coleccionables en Guadalajara'} />
    </div>
  );
}

export default App;
