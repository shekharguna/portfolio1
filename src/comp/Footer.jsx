import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='flex flex-row justify-between bg-black p-1'>
         <div className=' text-white '>
            <p className='font-semibold text-xl'>gs.</p>
          </div>
          <div className=''>
            <a href='https://github.com/shekharguna'>
            <FaGithub className='hover:shadow-gray-400 shadow-xl' size={30}  color='white'></FaGithub>
            </a>
            
          </div>
          </div>
    
  )
}

export default Footer