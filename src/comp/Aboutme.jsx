import React from 'react'

const Aboutme = () => {
  return (
    <div name='ABOUT' className=' bg-black text-white'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-end  h-full text-center md:text-left text-lg md:flex-row pb-7'>
        <div className='mt-4 md:mt-8'>
            <div className='font-medium text-3xl md:text-5xl'>
            <h1>About Me</h1>
            </div>
        
        <div className='w-full md:w-2/3 mt-7 md:mt-10'>
            <p className='text-lg md:text-3xl text-gray-500'>Hi I’m Donnie and I am passionate about everything that has to do with Digital Design and Art Direction. I enjoy working with agencies and enthusiastic people who want to solve problems through beautiful designs and experiences.</p>
        </div>
        
        </div>
        <div className='text-lg md:text-xl py-7 md:mt-7'>
          <a href='src\assets\bca resume main.pdf' download='resume.pdf'>
        <button className='text-black bg-white font-medium py-3 px-5 uppercase mr-4 hover:rounded-3xl duration-200'>Resume</button> 
        </a> 
        </div>
    </div>
    </div>
  )
}

export default Aboutme