import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RepeatingBackgroundInline from './background'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RepeatingBackgroundInline/>
  </StrictMode>,
)
