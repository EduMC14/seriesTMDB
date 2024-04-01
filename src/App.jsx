/* <---- Components ------>  */
import { useState } from 'react'
import NavBar from './components/NavBar'
import BusquedaSeries from './pages/BusquedaSeries'
import InfoSeries from './pages/InfoSeries'
import SeriesPopulares from './pages/SeriesPopulares'

function App () {
  const [query, setQuery] = useState('')
  console.log(setQuery)
  console.log(query)
  console.log('hola')
  return (
    <div className='App'>
      <header>
        <NavBar setQuery={setQuery} query={query} />
      </header>
      <SeriesPopulares />
      <BusquedaSeries query={query} />
      <InfoSeries />
    </div>
  )
}

export default App
