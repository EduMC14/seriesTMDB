import { useEffect, useState } from 'react'
import Paginacion from '../components/Paginacion'
import Cargando from '../components/Cargando'
import Card from '../components/Card'

const MejorValoradas = () => {
  const [rated, setRated] = useState('')
  const [loadingRated, setLoadingRated] = useState(true)
  const [paginacion, setPaginacion] = useState(1)

  useEffect(() => {
    async function getRated () {
      try {
        setLoadingRated(true)
        const request1 = await window.fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=128b82f8ca5b357f9e46e57d6455ae9b&language=en-US&page=${paginacion}`)
        const response = await request1.json()
        setRated(response)
        console.log(rated)
        setLoadingRated(false)
      } catch (error) {
        console.log(error)
      }
    }
    getRated()
  }, [paginacion])

  return (
    <section className='container py-4'>
      <div className='box-title-pag'>
        <h2 className='mb-4'>Mejor Valoradas</h2><Paginacion setPag={setPaginacion} pagina={paginacion} series={rated} />
      </div>
      <div className='row gy-4'>
        {
      loadingRated
        ? <Cargando />
        : rated.results.map((serie, index) => (
          <aside key={index} className='col-12 col-md-6 col-lg-3'>
            <Card {...serie} />
          </aside>
        ))
      }
      </div>
    </section>
  )
}

export default MejorValoradas
