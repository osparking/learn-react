import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppData from './AppData.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppData />
  </StrictMode>,
)
