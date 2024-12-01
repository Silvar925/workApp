import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss'
import { Testing } from './pages/testing'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Testing />
  </StrictMode>,
)
