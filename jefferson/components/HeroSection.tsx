import { ArrowDown, ArrowDownRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const HeroSection = () => {
  return (
    <>
    <main className="py-28 flex justify-center items-center ">
      <div className="">
        <h2 className="flex flex-col text-center md:items-center md:gap-4 gap-2 lg:mb-4 mb-2">
          <span className="text-[12px] lg:text-xl text-gray-500">
            I'm a
          </span>
          <span className="font-extrabold text-5xl md:text-7xl lg:text-9xl cta-text wider ">
            Software Developer
          </span>
        </h2>
        <h3 className="md:text-center md:text-sm text-[12px] lg:text-lg text-gray-500">
          <div className='hidden md:flex flex-col'>
            <span>
              I craft memorable web experiences for brands of all sizes,
            </span>
            <span>blending thoughtful UX with compelling design.</span>
          </div>

          <div className='md:hidden flex text-sm text-center w-sm items-center justify-center m-0'>
            <span>
              Designing memorable web experiences for brands, big and small.
            </span>
          </div>
        </h3>
      </div>
    </main>

    <section className='px-16'>
        <Link href="" >
            <span className='flex gap-2 text-gray-500'>
                Avaliable for collaboration
                <ArrowDownRight className='w-5 h-5' />
            </span>
            <span className='font-medium pl-12 text-xl'>
                jefftech108@gmail.com
            </span>
        </Link>
    </section>
    </>
  );
};
