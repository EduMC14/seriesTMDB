import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './router'

// Styles
import './index.css'
import './styles/botones.css'
import './styles/infoSeries.css'
import './styles/infoActores.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
)
