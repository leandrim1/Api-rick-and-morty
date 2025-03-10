import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Home from './components/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Home />
  </StrictMode>,
)
