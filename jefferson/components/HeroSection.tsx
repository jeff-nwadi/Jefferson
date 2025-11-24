import Image from 'next/image';
import React from 'react';

import Profile from '@/images/shedrack.jpg';

export const HeroSection = () => {
  return (
    <main className="py-28 px-5 md:px-16 flex justify-center items-center ">
      <div className=''>
        <h3 className='text-start text-[12px] lg:text-xl'> I'm a </h3>
        <h2 className="font-extrabold text-6xl md:text-8xl lg:text-9xl cta-text wider ">
          Software Developer
        </h2>
        <h3 className='md:text-center md:text-lg flex flex-col text-[12px]'>
            <span>I craft memorable web experiences for brands of all sizes,</span>
            <span>blending thoughtful UX with compelling design.</span>
        </h3>
      </div>
    </main>
  );
};
