import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image1 from '../assets/faceresume.png'
import { Link } from 'react-scroll';

const Home = () => {
const a="a"
  return (
    <div name='HOME' className='h-screen w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-start  h-full text-left text-lg md:flex-row'>

<div className='flex flex-col justify-center h-full text-left text-black'>
  
    <h1 className='text-5xl md:text-7xl font-semibold'>
      GUNASEKHAR
    </h1>
  
  <div className='text-2xl md:text-4xl text-black'>
    <span className='font-medium'>I am </span>
    <TypeAnimation sequence={[
      'a DEVELOPER',
      2000,
      'a DESIGNER',
      2000,
      'an EDITOR',
      2000
    ]} className='font-bold'
      repeat={Infinity} />
  </div>
  <div className='text-lg md:text-xl mt-4'>
  <Link to='ABOUT' smooth duration={800}>
<button className='bg-black text-white font-normal py-3 px-5 uppercase mr-4 hover:rounded-3xl duration-200'>About Me</button> 
</Link>
<Link to='CONTACT' smooth duration={800}>
<button className='bg-black text-white font-normal py-3 px-5 uppercase hover:rounded-3xl duration-200'>Contact Me</button> 
</Link>
</div>
</div>
<div>
<img src={Image1} className='mx-auto w-full md:w-full'></img>
</div>
</div>

    </div>
  )
}

export default Home