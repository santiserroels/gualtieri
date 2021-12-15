import logo from './logo.svg';
import React from 'react'

import './App.css';
import Header from './components/Header';
import { HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import Home from './pages/Home';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import Embarques from './pages/Embarques';
import Entregas from './pages/Entregas';
import Novedades from './pages/Novedades';
import New from './pages/New';
import ZonaDeServ from './pages/ZonaDeServ';
import DistanciaEP from './pages/DistanciaEP';
import TipoDeCamiones from './pages/TipoDeCamiones';
import ServDeAcondicionamiento from './pages/ServDeAcondicionamiento.js';

 
const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    
}

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })
  const cardHandler = e => {
    const father = document.getElementById("container-card-home")
    
    if (father.className === "container-card-home") {
        father.className = "container-card-home-open"
    } else {
        father.className = "container-card-home"
    }
}
  return (
    <div className="App">
      <HashRouter>
        <Header cardHandler={cardHandler} />
        <Switch>
        <Route  path="/us">
          <Nosotros width={width} />
        </Route>
        <Route path="/services/embarques">
          <Embarques width={width} />
        </Route>
        <Route path="/services/entregas">
          <Entregas width={width} />
        </Route>
        <Route path="/news">
          <Novedades width={width} />
        </Route>
        <Route path="/tools/zonaDeServ">
          <ZonaDeServ width={width} />
        </Route>
        <Route path="/tools/tipo-de-camiones">
          <TipoDeCamiones width={width} />
        </Route>
        <Route path="/tools/ServDeAcondicionamiento">
          <ServDeAcondicionamiento width={width} />
        </Route>
        <Route path="/tools/distanciaEP">
          <DistanciaEP width={width} />
        </Route>
        <Route path="/new/:new_id">
          <New  width={width} />
        </Route>
        <Route path="/">
          <Home cardHandler={cardHandler} width={width} />
        </Route>
      
        
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;