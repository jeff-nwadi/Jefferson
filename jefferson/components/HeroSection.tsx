'use client';

import { ArrowDown, ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ScrambleHover from './fancy/text/scramble-hover';
import Profile from '@/images/shedrack.jpg';
import { Button } from './ui/button';

export const HeroSection = () => {
  return (
    <>
      <main className="py-24 mb-6 flex justify-center items-center flex-col">
        <div className="">
          <h2 className="flex flex-col text-center md:items-center md:gap-4 gap-2 lg:mb-4 mb-2">
            <motion.span
              initial={{ opacity: [0, 1, 1], y: [-10, -10, -0] }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
              }}
              className="text-xl text-gray-500"
            >
              Hi👋, <span className="text-red-500">I'm a</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.7,
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
            animate={{ opacity: [0, 1, 1] }}
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
               I Design memorable web experiences for brands, big and small.
              </span>
            </div>
          </motion.h3>
        </div>

        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
           
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="py-4 "
        >
          <Link href="">
            <Button className="bg-red-500 cursor-pointer rounded-full">
              Get in touch
            </Button>{' '}
          </Link>
        </motion.span>
      </main>

      <section className="md:px-16 px-8 mb-18">
        <motion.div
          animate={{ opacity: [0, 0, 1], x: [-10, -10, -0] }}
          transition={{
            duration: 0.9,
            ease: 'circInOut',
          }}
        >
          <Link href="">
            <span className="flex gap-2 text-gray-500 items-center text-[12px] md:text-lg">
              Avaliable for collaboration
              <ArrowDownRight className="w-5 h-5" />
            </span>
            <span className="font-medium pl-7 lg:pl-12 md:text-xl">
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
