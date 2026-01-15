import React from 'react'
import Image from 'next/image'
import Will from '../images/will.jpg'

export const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 pb-40'>
        <Image src={Will} alt="Will" width={100} height={100} className='rounded-full'/>
        <div className='text-center py-5 heading-text text-4xl tracking-wider leading-12'>
            <h1>Hello, I'm Jefferson</h1>
            <h1 className='max-w-4xl'>a Frontend Developer crafting high-performance web applications by bridging design and scalable code.</h1>   
        </div> 
        <p className='py-5 sub-head-text text-base'>Building playful and vibrant web experiences since - Y:2021.</p>
    </div>
  )
}
