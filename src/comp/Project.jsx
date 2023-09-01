import React from 'react'
import img1 from "../assets/logos/weather1.jpg"
import img2 from "../assets/logos/es.png"

const Project = () => {
  return (
    <div name='PROJECTS' className='h-auto w-full  bg-black text-white'>
       
            <div className='flex flex-col justify-evenly items-center mx-10'>
                <div className='font-medium text-4xl md:text-7xl mt-5 md:mt-28'>
            <h1>Projects</h1>
            </div>
            <div className='flex flex-col gap-4 md:gap-44 md:flex-row pb-10 md:pb-20'>
            <div className='md:mt-24 mt-10 bg-white rounded-t-lg overflow-hidden shadow-gray-600 shadow-xl '>

<img src={img2} className='w-full h-52 md:h-56 md:w-full object-cover'></img>
<p className='text-black text-center text-lg md:text-3xl mt-1 md:mt-4'>Merchandise Website</p>
<p className='text-black text-center text-base md:text-xl mt-1 md:mt-1 underline'>React | Tailwind Css | Flowbite | Auth0 | Netlify</p>
<div className='flex flex-row justify-between m-1 md:m-3 text-sm font-light md:text-xl p-2'>
<a href="https://edustyle1.netlify.app/">
<button className='bg-black  text-white  uppercase py-0 px-1 md:py-3 md:px-5  hover:rounded-3xl duration-200'>Demo</button>
</a>
<a href='https://github.com/shekharguna/final-04-48'>
<button className='bg-black  text-white  uppercase py-0 px-1 md:py-3 md:px-5 hover:rounded-3xl duration-200'>Code</button>
</a>
</div>


            </div>

                <div className='md:mt-24 mt-10  bg-white rounded-t-lg overflow-hidden shadow-gray-600 shadow-xl'>

    <img src={img1} className='w-full h-52 md:w-full md:h-56  object-cover'></img>
<p className='text-black text-center text-lg md:text-3xl mt-1 md:mt-4'>Weather Website</p>
<p className='text-black text-center text-base md:text-xl mt-1 md:mt-1 underline'>React | Tailwind Css | OpenWeatherApi | Netlify</p>
<div className='flex flex-row justify-between m-1 md:m-3 text-sm font-light md:text-xl p-2'>
  <a href="https://weatherwas.netlify.app/">
<button className='bg-black  text-white  uppercase py-0 px-1 md:py-3 md:px-5  hover:rounded-3xl duration-200'>Demo</button>
</a>
<a href='https://github.com/shekharguna/weather11'>
<button className='bg-black  text-white  uppercase py-0 px-1 md:py-3 md:px-5 hover:rounded-3xl duration-200'>Code</button>
</a>
</div>


                </div>

                
            </div>
            </div>
        
    </div>
  )
}

export default Project