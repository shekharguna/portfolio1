import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';

const Navbar1 = () => {


  const [nav,setnav]=useState(false);

  const links = [
    {
      id: 1,
      link: 'HOME',
    },
    {
      id: 2,
      link: 'ABOUT',
    },
    {
      id: 3,
      link: 'SKILLS',
    },
    {
      id: 4,
      link: 'PROJECTS',
    },
    {
      id: 5,
      link: 'CONTACT',
    }
  ]
  return (
    <div>
      
         <div className='flex justify-between items-center w-full bg-white text-black fixed px-4 h-14 z-10'>
          <div>
            <p className='font-semibold text-xl'>gs.</p>
          </div>

<div className='pr-10'>
        <ul className=' md:flex hidden'>
          {links.map(({id, link})=>(
            <li key={id} className='hover:underline font-medium text-lg cursor-pointer px-5 '><Link to={link} smooth duration={800}>{link}</Link></li>
          ))}
        </ul>
        </div>

        {/* { mobile nav} */}
        <div onClick={()=> setnav(!nav)}
        className='cursor-pointer pr-4 z-10 md:hidden'>
         {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}
        </div>

{nav && (
  <ul className='flex flex-col justify-center items-center absolute 
        top-0 left-0 w-full h-screen bg-gray-500 text-white'>
        {links.map(({id, link})=>(
            <li key={id} className='font-medium text-2xl cursor-pointer px-5 py-5 hover:underline'><Link onClick={()=> setnav(!nav)} to={link} smooth duration={800}>{link}</Link></li>
          ))}
        </ul>
)}

        
      </div>
    </div>
  )
}

export default Navbar1