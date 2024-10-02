import React, { useRef } from 'react';
import NavBar from './Components/Navbar'
import HeroSection from './Components/Hero'
import SkillsCarousel from './Components/Skills'
import Projects from './Components/Projects'
function App() {

  return (
    <>
    <NavBar/>
    <HeroSection/>
    <SkillsCarousel/>
    <Projects/>
    </>
  )
}

export default App
