
import { Link } from 'react-router-dom'

const CarruselCast = ({ cast, url }) => {
  return (
    <div className='box-casting'>
      <h2 className='title-repar'>Reparto Principal</h2>
      <div className='carrusel'>
        {cast.map((actor, index) => (
          <Link to={`/InfoCast/${actor.id}`} className='box-cast text-body link-cast' key={actor.id}>
            <img src={url + actor.profile_path} alt={actor.name} className='img-cast' />
            <div className='box-character'>
              <h6>{actor.name}</h6>
              <p>{actor.character}</p>
            </div>

          </Link>
        ))}
      </div>
    </div>
  )
}

export default CarruselCast
