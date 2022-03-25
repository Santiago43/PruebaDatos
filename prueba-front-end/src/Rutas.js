import { Routes, Route } from 'react-router';
import Cargos from './components/pages/Cargos';
import Localizacion from './components/pages/Localizacion';
import Usuario from './components/pages/Usuario';
import Index from './components/pages/Index';
function Rutas(){
    return <div className="md:w-2/5 xl:w-4/5 p-6"> 
    <Routes>
	                <Route path="/" exact element={<Index/>}/>
                    <Route path="/Localizacion" exact element={<Localizacion/>}/>
                    <Route path="/Usuario" exact element={<Usuario/>}/>
                    <Route path="/Cargos" exact element={<Cargos/>}/>
	                </Routes>
     </div>
}
export default Rutas;