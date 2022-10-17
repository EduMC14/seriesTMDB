import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//  Componentes
import NavBar from './components/NavBar'
import SeriesPopulares from './pages/SeriesPopulares'
import BusquedaSeries from './pages/BusquedaSeries'
import InfoSeries from './pages/InfoSeries'
import InfoCast from './pages/InfoCast'
import MejorValoradas from './pages/MejorValoradas'

const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<SeriesPopulares />} />
        <Route path='/mejorValoradas/' element={<MejorValoradas />} />
        <Route path='/busqueda/:busqueda' element={<BusquedaSeries />} />
        <Route path='/infoSeries/:idSerie' element={<InfoSeries />} />
        <Route path='/infoCast/:idCast' element={<InfoCast />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers
