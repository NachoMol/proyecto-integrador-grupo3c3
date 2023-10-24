import React from 'react'
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <>
    <div>
    <Link to={'/CarGallery'}>
    <button>More photos</button>
    </Link>
    </div>
    <div>
    <header className='detail_header'>
      <h2 className='detail_title'>Titulo del producto</h2>
      <Link to={'/'}>
      <img className='back-logo' src="../../public/images/back-logo.png" alt="volver al inicio" />
      </Link>
    </header>
    <body>texto descriptivo del producto e imagenes</body>
    </div>
    </>
  )
}

export default Detail