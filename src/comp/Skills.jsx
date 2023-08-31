import React from 'react'
import {FaHtml5, FaJs, FaCss3Alt, FaReact} from "react-icons/fa"
import {SiTailwindcss, SiMysql, SiAdobephotoshop, SiAdobepremierepro} from "react-icons/si"


const Skills = () => {

    const techs=[
        {
            id:1,
            src: <FaHtml5 size={100} color='orange'/>,
            title: "HTML"
        },
        {
            id:2,
            src: <FaJs size={100} color='gold'/>,
            title: "JAVASCRIPT"
        },
        {
            id:3,
            src: <FaCss3Alt size={100} color='deepskyblue'/>,
            title: "CSS"
        },
        {
            id:4,
            src: <FaReact size={100} color='dodgerblue'/>,
            title: "REACT"
        },
        {
            id:5,
            src: <SiTailwindcss size={100} color='darkturquoise'/>,
            title: "TAILWINDCSS"
        },
        {
            id:6,
            src: <SiMysql size={100} color='darkblue'/>,
            title: "MYSQL"
        },
        {
            id:7,
            src: <SiAdobephotoshop size={100} color='darkslateblue'/>,
            title: "PHOTOSHOP"
        },
        {
            id:8,
            src: <SiAdobepremierepro size={100} color='darkmagenta'/>,
            title: "PREMIERE PRO"
        },
    ]


  return (
    <div name='SKILLS' className='h-screen w-full '>
    <div className='max-w-screen-lg mx-auto flex flex-col  items-center justify-center w-full h-full text-center text-lg '>
        <div className='font-medium text-5xl md:text-7xl'>
       <h1>Skills</h1>
       </div>
       <div className='grid grid-cols-2 gap-3 w-full mx-auto md:grid-cols-4 my-20'>
        {techs.map(({id,src,title})=>(
            <div key={id} className=' mx-auto mt-5 md:my-10 md:mx-auto  hover:shadow-md shadow-blue-400 hover:scale-105 duration-500 rounded-md'>
               <p className=''>{src}{title}</p>
              
                 </div>
        ))}
      
        </div>
    </div>
    </div>
  )
}


export default Skills