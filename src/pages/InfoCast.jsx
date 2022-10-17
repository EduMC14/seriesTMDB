
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cargando from '../components/Cargando'
import CarruselParti from '../components/CarruselParti'

const InfoCast = () => {
  const { idCast } = useParams()
  const [infoCasting, setInfoCasting] = useState({})
  const [loadingCasting, setLoadingCasting] = useState(true)
  const [castSerie, setCastSerie] = useState([])
  const urlImg = 'https://image.tmdb.org/t/p/original'

  const getInfoCast = async () => {
    const queryCasting = await window.fetch(`https://api.themoviedb.org/3/person/${idCast}?api_key=128b82f8ca5b357f9e46e57d6455ae9b&language=en-US`)
    const respuestaCasting = await queryCasting.json()
    setInfoCasting(respuestaCasting)
    const queryCastSerie = await window.fetch(`https://api.themoviedb.org/3/person/${idCast}/tv_credits?sort_by=popularity.desc&api_key=128b82f8ca5b357f9e46e57d6455ae9b&language=en-US&page=1`)
    const response = await queryCastSerie.json()
    setCastSerie(response)
    setLoadingCasting(false)
  }

  useEffect(() => {
    getInfoCast()
  }, [])
  return (
    <section main className='contenedor-principal'>
      {loadingCasting
        ? <Cargando />
        : <div className='box-name-bio text-dark'>
          <div className='box-name-img'>
            <h1 className='nombre'>{infoCasting.name}</h1>
            <img src={urlImg + infoCasting.profile_path} alt id='imgActor' />
            <h4 className='titulo-cumple'>Birthday:</h4><span className='cumpleaños'>{infoCasting.birthday}</span>
            <h4>Place of Birth:</h4><span className='lugar'>{infoCasting.place_of_birth}</span>
          </div>
          <div className='box-bio'>
            <h4>Biography:</h4>
            <p className='biografia'>{infoCasting.biography}</p>
            <h3>Series en las que ha participado</h3>
            <CarruselParti series={castSerie.cast} url={urlImg} />
          </div>
          </div>}
    </section>

  )
}

export default InfoCast
