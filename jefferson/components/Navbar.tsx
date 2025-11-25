'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SheetDemo } from '../components/HamburgerMenu';
import LetterSwapForward from './fancy/text/letter-swap-forward-anim';
import GoesOutComesInUnderline from './fancy/text/underline-goes-out-comes-in';
import ScrambleHover from './fancy/text/scramble-hover';
import Letter3DSwap from './fancy/text/letter-3d-swap';

const Navbar = () => {
  const model = 'Jefferson';
  const [debug, setDebug] = useState(false);
  return (
    <main className="bg-black">
      <div className="flex justify-between px-3 md:px-6 lg:px-16 py-8 items-center">
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1], y: [-10, -10, -0] }}
          transition={{
            duration: 0.4,
            ease: 'circInOut',
            delay: 0.05 + 0.5,
            times: [0, 0.2, 1],
          }}
        >
          <Link
            href=""
            className="gap-0 flex text-white w-1/2  z-10 flex-col logo leading-7 font-abold text-xl md:text-2xl lg:text-3xl "
          >
            <Letter3DSwap
              rotateDirection="top"
              staggerDuration={0.03}
              staggerFrom="first"
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: debug ? 50 : 160,
              }}
            >
              Nwadi Jefferson
            </Letter3DSwap>
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1], y: [-10, -10, -0] }}
          transition={{
            duration: 0.3,
            ease: 'circInOut',
            delay: 0.7,
            times: [0, 0.2, 1],
          }}
          className="hidden gap-12 lg:flex text-white"
        >
          <li>
            <Link href="" className="text-lg">
              <LetterSwapForward label="About me" reverse={true} />
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg">
              <LetterSwapForward label="Works" reverse={true} />
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg">
              <LetterSwapForward label="Services" reverse={true} />
            </Link>
          </li>
        </motion.ul>

        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1], y: [-10, -10, -0] }}
          transition={{
            duration: 0.9,
            ease: 'circInOut',
            delay: 0.4,
            times: [0, 0.4, 1],
          }}
        >
          <GoesOutComesInUnderline direction="left">
            <Link
              href=""
              className="hidden text-white lg:flex font-bold wider z-10 text-lg items-center gap-2"
            >
              <span> Contact Me</span>
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </GoesOutComesInUnderline>
        </motion.div>
        <div className="flex lg:hidden text-white">
          <SheetDemo />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
