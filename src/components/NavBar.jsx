
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import tmdb from '../assets/tmdb.svg'

const NavBar = ({ setQue }) => {
  const input = useRef()
  const navigate = useNavigate()
  const buscarSeries = () => {
    navigate(`/busqueda/${input.current.value}`)
    setQue(input.current.value)
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark box-nav'>
      <div className='container'>
        <img src={tmdb} alt='star+' className='img-star' />
        <div className='collapse navbar-collapse mx-4'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item '>
              <a className='nav-link active link-home' href='/'>Home</a>
            </li>
            <li className='nav-item dropdown link-generos'>
              <a className='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>Categorias</a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='/'>Populares</a>
                <a className='dropdown-item' href='/mejorValoradas/'>Mejor Valoradas</a>
              </div>
            </li>
          </ul>
        </div>

        <form className='d-flex'>
          <input className='form-control me-sm-2' type='text' placeholder='Search' ref={input} />
          Nav
          <button className='btn btn-secondary my-2 my-sm-0' onClick={buscarSeries} type=''>Search</button>
        </form>
      </div>
    </nav>

  )
}

export default NavBar
