import './App.css';
import Rutas from './Rutas';
import Navegador from './components/shared/Navegador';
import NavegadorNoLogged from './components/shared/NavegadorNoLogged';
function App() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if(user){
    return <div className="App">
      <Navegador/>
      <div className="container-fluid">
      <Rutas />
      </div>
    </div>
  }
  return <div className="App">
  <NavegadorNoLogged/>
  <div className="container-fluid">
  <Rutas />
  </div>
</div>
}

export default App;
