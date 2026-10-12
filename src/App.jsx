import './App.css'

import Navbar from './components/Navbar.jsx'
import HeroBanner from './components/Hero/HeroBanner.jsx'
import Skills from './components/Skills.jsx'
import Cp from './components/Cp.jsx'
import Projects from './components/Projects/Projects.jsx'
import Education from './components/Education.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { useState } from 'react'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='bg-black'>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <About></About>
      <Cp></Cp>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
    </div>
  )
}

export default App
