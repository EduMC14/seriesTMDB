
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cargando from '../components/Cargando'
import Card from '../components/Card'

const BusquedaSeries = ({ query1 }) => {
  const { busqueda } = useParams()
  const [busSeries, setBusSeries] = useState([])
  const [loading1, setLoading1] = useState(true)
  useEffect(() => {
    async function searchSerie () {
      try {
        const peticion = await window.fetch(`https://api.themoviedb.org/3/search/tv?api_key=128b82f8ca5b357f9e46e57d6455ae9b&query=${busqueda}&page=1&include_adult=false`)
        const res = await peticion.json()
        setBusSeries(res)
        setLoading1(false)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    searchSerie()
  }, [query1])
  return (
    <section className='container py-4'>
      <div className='box-title-pag'>
        <h2 className='mb-4'>Resultados de tu Busqueda...</h2>
      </div>
      <div className='row gy-4'>
        {
    loading1
      ? <Cargando />
      : busSeries.results.map((busSeries, index) => (
        <aside key={index} className='col-12 col-md-6 col-lg-3'>
          <Card {...busSeries} />
        </aside>
      ))
    }
      </div>
    </section>
  )
}

export default BusquedaSeries
