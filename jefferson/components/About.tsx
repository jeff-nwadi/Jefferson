import React from 'react'

export const About = () => {
  return (
    <div id='about' className='flex justify-center items-center pb-20'>
        <div className='bg-[#8B5CF6] w-full max-w-[1000px] min-h-[600px] h-auto rounded-lg mx-4 md:mx-0'>
            <div className='p-8 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24 py-16'>
                <div className='sub-head-text w-full md:w-1/2'>
                    <h1 className='uppercase text-3xl md:text-4xl mb-6 tracking-wide leading-12 text-white heading-text text-center md:text-left'>About me</h1>
                    <p className='text-white w-full text-base md:text-lg text-center md:text-left'>
                        <span className='mb-6 block'>
                            I specialize in building high-performance, responsive web applications. I’ve always been driven by the intersection of logic and creativity, which led me to focus on mastering Next.js and modern web standards.
                        </span>
                        <span className='mb-6 block'>
                            <h1 className='text-xl tracking-wider leading-8 md:leading-12 mb-2'>My approach is simple:</h1> 
                            I bridge the gap between elegant design and scalable code. I believe that a great digital product should not only look stunning but also be fast, accessible, and built to grow. Whether I’m developing a complex user interface or optimizing a site’s performance, I am committed to writing clean code that delivers a seamless user experience.
                            I thrive on solving technical challenges and turning ambitious ideas into functional, pixel-perfect reality.
                        </span>
                    </p>
                </div>
                <div className='flex flex-col gap-6 w-full md:w-auto items-center'>
                    <div className='bg-white text-black h-auto min-h-[99px] w-full max-w-[330px] md:w-[330px] -rotate-3 md:-rotate-6 heading-text rounded-lg p-5 flex justify-between items-center'>
                        <span className='text-[#6982FF] text-xl md:text-2xl tracking-wider'>
                                Frontend 
                        </span>
                        <span className='text-[#6982FF] text-4xl md:text-5xl tracking-wider'>
                            86%
                        </span>
                    </div>
                    <div className='bg-white text-black h-auto min-h-[99px] w-full max-w-[330px] md:w-[330px] rotate-3 md:rotate-6 heading-text rounded-lg p-5 flex justify-between items-center'>
                        <span className='text-[#00D74C] text-xl md:text-2xl tracking-wider'>
                            Backend 
                        </span>
                        <span className='text-[#00D74C] text-4xl md:text-5xl tracking-wider'>
                            65%
                        </span>
                    </div>
                    <div className='bg-white text-black h-auto min-h-[99px] w-full max-w-[330px] md:w-[330px] -rotate-3 md:-rotate-6 heading-text rounded-lg p-5 flex justify-between items-center'>
                        <span className='text-[#D70032] text-xl md:text-2xl tracking-wider'>
                            UI/UX Design
                        </span>
                        <span className='text-[#D70032] text-4xl md:text-5xl tracking-wider'>
                            71%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
