import React from 'react'
import Image from 'next/image'
import Will from '../images/will.jpg'

export const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center py-10 md:py-20 pb-20 md:pb-40 px-4'>
        <Image src={Will} alt="Will" width={100} height={100} className='rounded-full w-20 h-20 md:w-[100px] md:h-[100px]'/>
        <div className='text-center py-5 heading-text text-2xl md:text-4xl tracking-wider leading-8 md:leading-12'>
            <h1>Hello, I'm Jefferson</h1>
            <h1 className='max-w-4xl text-xl md:text-4xl mt-2'>a Frontend Developer crafting high-performance web applications by bridging design and scalable code.</h1>   
        </div> 
        <p className='py-5 sub-head-text text-sm md:text-base text-center max-w-md md:max-w-none'>Building playful and vibrant web experiences since - Y:2021.</p>
    </div>
  )
}
