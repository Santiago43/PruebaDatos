import './App.css';
import Navegador from './components/shared/Navegador';
import Rutas from './Rutas';
function App() {
  return (
    <div className="App">
      <Navegador/>
      <div className="container-fluid">
      <Rutas />
      </div>
    </div>
  );
}

export default App;
