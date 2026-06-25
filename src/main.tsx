import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Kosten from "./pages/Kosten.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Kosten />
  </StrictMode>,
)