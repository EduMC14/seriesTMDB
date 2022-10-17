import React from 'react'
import { Link } from 'react-router-dom'

const CarruselParti = ({ series, url }) => {
  return (
    <div className='box-parti'>
      <div className='carrusel'>
        {series.map((series, index) => (
          <Link to={`/InfoSeries/${series.id}`} className='box-cast text-body link-cast' key={series.id}>
            <img src={url + series.poster_path} alt={series.name} className='img-cast' />
            <div className='box-character'>
              <h6>{series.name}</h6>
            </div>

          </Link>
        ))}
      </div>
    </div>
  )
}

export default CarruselParti
