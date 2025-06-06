import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './topics/App2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
