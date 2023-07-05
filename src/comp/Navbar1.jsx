import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar1 = () => {


  const [nav,setnav]=useState(false);

  const links = [
    {
      id: 1,
      name: 'HOME',
    },
    {
      id: 2,
      name: 'ABOUT',
    },
    {
      id: 3,
      name: 'SKILLS',
    },
    {
      id: 4,
      name: 'PROJECTS',
    },
    {
      id: 5,
      name: 'CONTACT',
    }
  ]
  return (
    <div>
      
         <div className='flex justify-between items-center w-full bg-white text-black fixed px-4 h-20 z-10'>
          <div>
            <p className='font-semibold text-3xl'>gs.</p>
          </div>

<div className='pr-10'>
        <ul className=' md:flex hidden'>
          {links.map(link=>(
            <li key={link.id} className='hover:underline font-medium text-xl cursor-pointer px-5 '>{link.name}</li>
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
        {links.map(link=>(
            <li key={link.id} className='font-medium text-2xl cursor-pointer px-5 py-5 hover:underline'>{link.name}</li>
          ))}
        </ul>
)}

        
      </div>
    </div>
  )
}

export default Navbar1