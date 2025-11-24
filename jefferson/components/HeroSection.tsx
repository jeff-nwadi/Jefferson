'use client';

import { ArrowDown, ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ScrambleHover from './fancy/text/scramble-hover';

export const HeroSection = () => {
  return (
    <>
      <main className="py-28 flex justify-center items-center ">
        <div className="">
          <h2 className="flex flex-col text-center md:items-center md:gap-4 gap-2 lg:mb-4 mb-2">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
              }}
              className="text-[12px] lg:text-xl text-gray-500"
            >
              I'm a
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="font-extrabold text-5xl md:text-7xl lg:text-9xl cta-text wider "
            >
              Software Developer
            </motion.span>
          </h2>
          <motion.h3
            initial={{ opacity: 0, y: 0.5 }}
            animate={{ opacity: [0, 1, 1], y: [10, 10, 0] }}
            transition={{
              duration: 0.9,
              delay: 0.5,
            }}
            className="md:text-center md:text-sm text-[12px] lg:text-lg text-gray-500"
          >
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
          </motion.h3>
        </div>
      </main>

      <section className="px-16">
        <motion.div 
            animate={{ opacity: [0, 1, 1], x: [-10, -10, -0] }}
            transition={{
              duration: 0.9,
              ease: 'circInOut',
            }}
        >
          <Link href="">
            <span className="flex gap-2 text-gray-500">
              Avaliable for collaboration
              <ArrowDownRight className="w-5 h-5" />
            </span>
            <span className="font-medium pl-12 text-xl">
              <ScrambleHover
                text="jefftech10@gmail.com"
                scrambleSpeed={50}
                maxIterations={8}
                useOriginalCharsOnly={true}
                className="cursor-pointer"
              />
            </span>
          </Link>
        </motion.div>
      </section>
    </>
  );
};
