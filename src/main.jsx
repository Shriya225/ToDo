import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDo from './todo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDo />
  </StrictMode>,
)
