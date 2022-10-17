/* <---- Components ------>  */
import { useState } from 'react'
import NavBar from './components/NavBar'
import BusquedaSeries from './pages/BusquedaSeries'
import InfoSeries from './pages/InfoSeries'
import SeriesPopulares from './pages/SeriesPopulares'

function App () {
  const [query, setQuery] = useState('')
  return (
    <div className='App'>
      <header>
        <NavBar setQue={setQuery} />
      </header>
      <SeriesPopulares />
      <BusquedaSeries query1={query} />
      <InfoSeries />
    </div>
  )
}

export default App
