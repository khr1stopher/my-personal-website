import * as React from 'react'
import NavBar from '../components/NavBar'
import Inicio from '../components/Inicio'
import About from '../components/About'
import Experience from '../components/Experience'
import Works from '../components/works'
import Contact from '../components/Contact'
import '../index.css'

const Index = () => {
  return <>
    <NavBar />
    <div className="content">
      <Inicio />
      <About />
      <Experience />
      <Works />
      <Contact />
    </div>
  </>
}

// pacs is a sistem search please khris!!!

export default Index;