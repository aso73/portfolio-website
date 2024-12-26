import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import AboutMe_2 from './components/AboutMe_2'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Skills_2 from './components/Skills_2'
import ContactMe from './components/ContactMe'
import Foot from './components/Foot'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <AboutMe_2/>
      <Projects/>
      <Skill/>
      <Skills_2/>
      <ContactMe/>
      <Foot/>
      
    </div>
  )
}

export default App
