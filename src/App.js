import React from 'react'

import './App.css';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <Header cardHandler={cardHandler} />
        <Switch>
          <Route path="/nosotros">
            <Nosotros width={width} />
          </Route>
          <Route path="/servicios/embarques">
            <Embarques width={width} />
          </Route>
          <Route path="/servicios/entregas">
            <Entregas width={width} />
          </Route>
          <Route path="/novedades" exact strict>
            <Novedades width={width} />
          </Route>
          <Route path="/herramientas/zona-de-servicios">
            <ZonaDeServ width={width} />
          </Route>
          <Route path="/herramientas/tipo-de-camiones">
            <TipoDeCamiones width={width} />
          </Route>
          <Route path="/herramientas/servicio-de-acondicionamiento">
            <ServDeAcondicionamiento width={width} />
          </Route>
          <Route path="/herramientas/distancia-entre-puertos">
            <DistanciaEP width={width} />
          </Route>
          <Route path="/novedades/:new_id">
            <New  width={width} />
          </Route>
          <Route path="/">
            <Home cardHandler={cardHandler} width={width} />
          </Route>
          <Route path="/hola">
            <Embarques width={width} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;