import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './comp/Navbar1'
import Home from './comp/Home'
import Aboutme from './comp/Aboutme'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar1></Navbar1>
      <Home/>
      <Aboutme/>
    </>
  )
}

export default App
