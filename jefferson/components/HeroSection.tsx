import { ArrowDownRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const HeroSection = () => {
  return (
    <>
      <main className="py-28 flex justify-center items-center ">
        <div className="">
          <h2 className="flex flex-col text-center md:items-center md:gap-4 gap-2 lg:mb-4 mb-2 ">
            <span className="text-[12px] lg:text-xl text-gray-500">I'm a</span>
            <span className="font-extrabold text-5xl md:text-7xl lg:text-9xl cta-text wider ">
              Software Developer
            </span>
          </h2>
          <h3 className="md:text-center md:text-sm text-[12px] lg:text-lg text-gray-500">
            <div className="hidden md:flex flex-col">
              <span>
                I craft memorable web experiences for brands of all sizes,
              </span>
              <span>blending thoughtful UX with compelling design.</span>
            </div>

            <div className="md:hidden flex text-sm text-center w-sm items-center justify-center m-0">
              <span>
                Designing memorable web experiences for brands, big and small.
              </span>
            </div>
          </h3>
        </div>
      </main>

      <section className="lg:px-16 md:px-8 px-5">
        <Link href="">
          <span className="text-gray-500 uppercase lg:text-lg md:text-sm text-[12px] flex gap-2 tracking-tight lg:tracking-wide">
            Avaliable for all Collaboration
            <ArrowDownRight className='h-5 w-5' />
          </span>
          <span className='pl-6 font-medium lg:text-2xl md:text-xl text-lg underline tracking-tighter lg:tracking-wide'>
            jefftech107@gmail.com
          </span>
        </Link>
      </section>
    </>
  );
};
