import { useState } from 'react'

import './App.css'
import Navbar1 from './comp/Navbar1'
import Home from './comp/Home'
import Aboutme from './comp/Aboutme'
import Skills from './comp/Skills'
import Contact from './comp/Contact'
import Project from './comp/Project'
import Footer from './comp/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar1></Navbar1>
      <Home/>
      <Aboutme/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
