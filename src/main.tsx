import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Navbar } from './components/Navbar.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar names={['Ali', 'Ahmad', 'Zahra']}></Navbar>
    <App />
  </StrictMode>
)
