import React from 'react'

const Skills = () => {
  return (
    <div name='SKILLS' className='h-screen w-full'>
    <div className='mx-auto flex flex-col  items-center justify-evenly  h-full text-left text-lg md:flex-col '>
        <div className='font-medium text-6xl md:text-9xl md:mt-28'>
        <h1 className='basis-1/4'>Skills</h1>
        </div>
        <div className='basis-2/4 flex flex-col gap-10 md:gap-24 md:flex-row md:text-5xl  text-white'>
            <div className='bg-black p-5 md:p-14'>
                <ul>
                    <li className=' md:text-7xl text-gray-500 underline uppercase pb-1 md:pb-12'>Frontend</li>
                    <li>Javascript</li>
                    <li>C</li>
                    <li>Java</li>
                    
                </ul>
            </div>
            <div className='bg-black p-5 md:p-14'>
            <ul>
                    <li className='md:text-7xl text-gray-500 underline uppercase pb-1 md:pb-12'>Backend</li>
                    <li>Mysql</li>
                    <li>Nextjs</li>
                    <li>Expressjs</li>
                </ul>
            </div>
            <div className='bg-black p-5 md:p-14'>
            <ul>
                    <li className='md:text-7xl text-gray-500 underline uppercase pb-1 md:pb-12'>Tools</li>
                    <li>Photoshop</li>
                    <li>Premiere Pro</li>
                    <li>Figma</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills