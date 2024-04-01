/* eslint-disable camelcase */

import { useNavigate } from 'react-router-dom'

const Card = ({ name, backdrop_path, vote_average, first_air_date, id }) => {
  const urlImg = 'https://image.tmdb.org/t/p/original'
  const navigate = useNavigate()
  const infoSer = (e) => {
    e.preventDefault()
    navigate(`/infoSeries/${id}`)
  }

  return (
    <div className='card' onClick={infoSer}>
      <img src={urlImg + backdrop_path} className='card-img-top img-card' alt={name} />
      <div className='card-body'>
        <h5 className='card-title title-serie'>{name}</h5>
        <div>
          <p className='m-0'>Puntuacion {vote_average}</p>
          <p>{first_air_date}</p>
        </div>
      </div>
    </div>

  )
}

export default Card
