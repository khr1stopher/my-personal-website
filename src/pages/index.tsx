import * as React from 'react'
import NavBar from '../components/NavBar'
import Inicio from '../components/Inicio'
// import About from '../components/About'
import Experience from '../components/Experience'
import Works from '../components/works'
import Contact from '../components/Contact'
import '../index.scss'
import LoadingPage from '../components/loadingPage'
import { Content } from '../components/indexComponents'
import Separator from '../components/utilities/Separator'
import Footer from '../components/Footer'

const Index = () => {
  return <>
    <LoadingPage>
      <Content>
        <NavBar />
        <Inicio />
        <Separator title='Experience' description="Here are some companies I've worked"/>
        {/* <About /> */}
        <Experience />
        <Separator title='My Work' description="Timeline of the projects that I have developed"/>
        <Works />
        <Footer />
      </Content>
    </LoadingPage>
  </>
}

// pacs is a sistem search please khris!!!

export default Index;