import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Umsatz from "./pages/Umsatz.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Umsatz />
  </StrictMode>,
)
