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

const Index = () => {
  return <>
    <LoadingPage>
      <Content>
        <NavBar />
        <Inicio />
        {/* <About /> */}
        <Experience />
        <Works />
      </Content>
    </LoadingPage>
  </>
}

// pacs is a sistem search please khris!!!

export default Index;