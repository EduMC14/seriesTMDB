import React from 'react'

const Paginacion = ({ setPag, pagina, series }) => {
  return (
    <div className='box-pag'>
      {pagina > 1 && <div class='button -regular center btn-atras' onClick={() => setPag(pagina - 1)}><i className='fa-regular fa-circle-left' id='icon' /></div>}
      <input type='text' className='input-pag' defaultValue={series.page} maxLength='4' />
      <div> / {series.total_pages}</div>
      <div class='button -regular center btn-sig' onClick={() => setPag(pagina + 1)}> <p className='p-icons'><i className='fa-regular fa-circle-right' id='icon' /></p></div>
    </div>

  )
}

export default Paginacion
