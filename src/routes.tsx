import { Route, Routes } from "react-router-dom";

import Texte from './pages/Texte'
import Favoritos from './pages/Favoritos'
import Login from './pages/Login' 
import { Analises } from "./pages/Analises";
import Recuperacao from "./pages/Recuperacao";
import Possplash from "./pages/Possplash";
import Principal from "./pages/Principal";
import Home from "./pages/Home";
import Estrategia from "./pages/Estrategia";
import Configuracoes from "./pages/Configuracoes";

import './style.css'
import Painel from "./pages/Painel";
import Restauracao from "./pages/Restauracao";
import Alertas from "./pages/Alertas";
import Graf from "./pages/Graf/Graf";
import ErrosDia from "./components/Dashboards/graficoErro/ErroDia";
import Erros from "./pages/Erros/ErrosMes";
import ErrosMes from "./pages/Erros/ErrosMes";
import ErrosEx from "./pages/Erros/ErrosEx";
import LinhaExemplo from "./pages/LinhaExemplo/LinhaExemplo";
import DonutMes from "./pages/LinhaExemplo/DunutMes";
import DonutDia from "./pages/LinhaExemplo/DonutDia";
import SeletorAlertas from "./pages/SeletorAlertas/SeletorAlertas";

function MainRoutes() {

    return (
        <Routes>
            <Route path="/analises" element={<Analises/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
            <Route path="/home" element={<Home/>}/>            
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Principal/>}/>
            <Route path="/text" element={<Texte/>}/>
            <Route path="/possplash" element={<Possplash/>}/>
            <Route path="/recuperacao" element={<Recuperacao/>}/>
            <Route path="/estrategias" element={<Estrategia/>} />
            <Route path="/configuracoes" element={<Configuracoes/>}/>
            <Route path="/alertas" element={<Alertas/>} />
            <Route path="/restauracao" element={<Restauracao/>} />
            <Route path="/graf" element={<Graf/>} />
            <Route path="/erros" element={<ErrosMes/>}/>
            <Route path="/errosdia" element={<ErrosDia/>}/>
            <Route path="/errosex" element={<LinhaExemplo/>}/>
            <Route path="/donutmes" element={<DonutMes/>}/>
            <Route path="/donutdia" element={<DonutDia/>}/>
            <Route path="/seletor" element={<SeletorAlertas/>} />
        </Routes>
    )
}

export default MainRoutes;