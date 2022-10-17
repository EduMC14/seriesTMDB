
import { useState, useEffect } from 'react'
import Paginacion from '../components/Paginacion'
import Card from '../components/Card'
import Cargando from '../components/Cargando'

const SeriesPopulares = () => {
  const [series, setSeries] = useState('')
  const [loading, setLoading] = useState(true)
  const [paginacion, setPaginacion] = useState(1)

  useEffect(() => {
    async function getSeriespopular () {
      try {
        setLoading(true)
        const request1 = await window.fetch(`https://api.themoviedb.org/3/tv/popular?api_key=128b82f8ca5b357f9e46e57d6455ae9b&language=en-US&page=${paginacion}`)
        const response = await request1.json()
        setSeries(response)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getSeriespopular()
  }, [paginacion])

  return (
    <section className='container py-4'>
      <div className='box-title-pag'>
        <h2 className='mb-4'>Series Populares</h2><Paginacion setPag={setPaginacion} pagina={paginacion} series={series} />
      </div>
      <div className='row gy-4'>
        {
      loading
        ? <Cargando />
        : series.results.map((serie, index) => (
          <aside key={index} className='col-12 col-md-6 col-lg-3'>
            <Card {...serie} />
          </aside>
        ))
      }
      </div>
    </section>
  )
}

export default SeriesPopulares
