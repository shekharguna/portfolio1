import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Image1 from '../assets/faceresume.png'

const Home = () => {
  return (
    <div className='h-screen w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-start  h-full text-left text-lg md:flex-row'>

<div className='flex flex-col justify-center h-full text-left text-black'>
  
    <h1 className='text-5xl md:text-7xl font-semibold'>
      GUNASEKHAR
    </h1>
  
  <div className='text-2xl md:text-4xl text-black'>
    <span className='font-medium'>I am a </span>
    <TypeAnimation sequence={[
      'Developer',
      2000,
      'Designer',
      2000,
      'Editor',
      2000
    ]} className='font-bold uppercase'
      repeat={Infinity} />
  </div>
  <div className='text-lg md:text-xl mt-4'>
<button className='bg-black text-white font-normal py-3 px-5 uppercase mr-4 hover:rounded-3xl duration-200'>About Me</button> 
<button className='bg-black text-white font-normal py-3 px-5 uppercase hover:rounded-3xl duration-200'>Contact Me</button> 
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