import React from 'react'

const Contact = () => {
  return (
    <div name='CONTACT'>
        <div className='h-screen w-full'>
            <div className='flex flex-col justify-center max-w-screen-lg mx-auto py-36'>
<div>
    <p className='text-5xl'>Contact</p>
    <p className='text-3xl py-5'>Fill the form below to contact</p>
</div>
<div>
    <form action='https://getform.io/f/a535c154-e2ed-42ab-9127-bb50e418c1d8' method='POST' className='flex flex-col gap-5 w-full'>
        <input type='text' name='Name' placeholder='Enter Your Name' className='p-2 bg-transparent rounded-md border-2 focus:outline-none border-black text-lg text-black'></input>
        <input type='text' name='Email' placeholder='Enter Your Email' className='p-2 bg-transparent rounded-md border-2 focus:outline-none border-black text-lg text-black'></input>
        <textarea name='Message' placeholder='Enter Your Message' rows={10} cols={30}  className='p-2 bg-transparent rounded-md border-2 focus:outline-none border-black text-lg text-black'></textarea>
        
        <button className='text-white bg-black text-2xl font-medium mx-auto p-3 hover:rounded-3xl duration-200 '>Contact</button>  
        
    </form>
</div>
</div>
        </div>
    </div>
  )
}

export default Contact