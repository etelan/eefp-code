import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './homepage/Homepage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
