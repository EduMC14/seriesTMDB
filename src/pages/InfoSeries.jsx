
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Cargando from '../components/Cargando'
import CarruselCast from '../components/CarruselCast'

const InfoSeries = () => {
  const urlImg = 'https://image.tmdb.org/t/p/original'
  const { idSerie } = useParams()
  const [info, setInfo] = useState([])
  const [loadingInfo, setLoadingInfo] = useState(true)
  const [casting, setCast] = useState([])
  const getInfoSerie = async () => {
    try {
      const peticion1 = await window.fetch(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=128b82f8ca5b357f9e46e57d6455ae9b&language=en-US`)
      const respuesta = await peticion1.json()

      const peticionCast = await window.fetch(`https://api.themoviedb.org/3/tv/${idSerie}/credits?api_key=128b82f8ca5b357f9e46e57d6455ae9b&language=en-US`)
      const respuestaCast = await peticionCast.json()
      setCast(respuestaCast)
      setInfo(respuesta)
      setLoadingInfo(false)
    } catch (error) {
      console.log(error)
    }
  }

  /* const getCast = async () => {
    console.log(respuestaCast)
  } */

  useEffect(() => {
    getInfoSerie()
  }, [])

  return (
    <section>
      {
      loadingInfo
        ? <Cargando />
        : <section className='sec-info'>
          <div className='box-info-flex'>
            <div className='box-img'><img src={urlImg + info.poster_path} alt={info.name} className='img-poster' /></div>
            <div className='box-info'>
              <h1>{info.name}</h1>
              <div className='box-genres'>
                <span>{info.first_air_date}  </span>{info.genres.map((genero, index) => {
                  return <span key={index}>{`/ ${genero.name} `}</span>
                })}
              </div>
              <div className='punt-icons'>
                <h5>Puntuacio de los usuarios {info.vote_average.toString().substring(0, 3)}</h5>
                <div className='box-icons'>
                  <div className='icon'><i class='fa-solid fa-list-ul' /></div>
                  <div className='icon'><i class='fa-solid fa-heart' /></div>
                  <div className='icon'><i class='fa-solid fa-bookmark' /></div>
                  <div className='icon'><i class='fa-solid fa-star' /></div>
                  <span><i class='fa-solid fa-play' /> Reproducir Trailer </span>
                </div>
              </div>
              <div className='box-overview'>
                <h2>Overview</h2>
                <p>{info.overview}</p>
              </div>
            </div>
          </div>

        </section>
          }
      {loadingInfo ? <h2>Cargando cast...</h2> : <CarruselCast cast={casting.cast} url={urlImg} idSerie={idSerie} />}

    </section>

  )
}

export default InfoSeries
