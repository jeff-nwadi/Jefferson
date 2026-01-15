import React from 'react'

export const About = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='bg-[#8B5CF6] w-[1000px] h-[600px] rounded-lg'>
            <div className='p-8 flex justify-between items-center gap-24 py-16'>
                <div className='sub-head-text'>
                    <h1 className='uppercase text-4xl mb-6 tracking-wide leading-12 text-white heading-text'>About me</h1>
                    <p className='text-white max-w-xl text-lg'>
                        <span className='mb-6'>
                            I specialize in building high-performance, responsive web applications. I’ve always been driven by the intersection of logic and creativity, which led me to focus on mastering Next.js and modern web standards.
                        </span>
                        <span className='mb-6'>
                            <h1 className='text-xl tracking-wider leading-12'>My approach is simple:</h1> 
                            I bridge the gap between elegant design and scalable code. I believe that a great digital product should not only look stunning but also be fast, accessible, and built to grow. Whether I’m developing a complex user interface or optimizing a site’s performance, I am committed to writing clean code that delivers a seamless user experience.
                            I thrive on solving technical challenges and turning ambitious ideas into functional, pixel-perfect reality.
                        </span>
                    </p>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='bg-white text-black h-[99px] w-[330px] -rotate-6 heading-text rounded-lg p-5 flex justify-between items-center'>
                        <span className='text-[#6982FF] text-2xl'>
                                Frontend 
                        </span>
                        <span className='text-[#6982FF] text-5xl'>
                            86%
                        </span>
                    </div>
                    <div className='bg-white text-black h-[99px] w-[330px] rotate-6 heading-text rounded-lg p-5 flex justify-between items-center'>
                        <span className='text-[#00D74C] text-2xl'>
                            Backend 
                        </span>
                        <span className='text-[#00D74C] text-5xl'>
                            65%
                        </span>
                    </div>
                    <div className='bg-white text-black h-[99px] w-[330px] -rotate-6 heading-text rounded-lg p-5 flex justify-between items-center'>
                        <span className='text-[#D70032] text-2xl'>
                            UI/UX Design
                        </span>
                        <span className='text-[#D70032] text-5xl'>
                            71%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
