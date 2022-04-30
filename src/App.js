import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      
      <ItemDetailContainer />
    </div>
  );
}

export default App;
