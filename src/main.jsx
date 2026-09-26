import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import HeroBanner from './components/Hero/HeroBanner.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode className="">
    <Navbar></Navbar>
    <HeroBanner></HeroBanner>
    <App />
  </StrictMode>,
)
