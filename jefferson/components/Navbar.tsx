'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SheetDemo } from '../components/HamburgerMenu';
import LetterSwapForward from './fancy/text/letter-swap-forward-anim';
import GoesOutComesInUnderline from './fancy/text/underline-goes-out-comes-in';
import ScrambleHover from './fancy/text/scramble-hover';

const Navbar = () => {
  const model = 'Jefferson';
  return (
    <main>
      <div className="flex justify-between px-3 md:px-6 lg:px-16 py-8 items-center">
        <motion.div
          layout
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
            className="gap-0 flex flex-col logo leading-7 font-extrabold text-xl md:text-2xl lg:text-3xl "
          >
            <ScrambleHover
              text='Nwadi Jefferson'
              scrambleSpeed={50}
              maxIterations={8}
              useOriginalCharsOnly={true}
              className="cursor-pointer"
            >
              
            </ScrambleHover>
          </Link>
        </motion.div>

        <motion.ul
          animate={{ opacity: [0, 1, 1], y: [-10, -10, -0] }}
          transition={{
            duration: 0.3,
            ease: 'circInOut',
            delay: 0.7,
            times: [0, 0.2, 1],
          }}
          className="hidden gap-12 lg:flex"
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
              <LetterSwapForward label="connect" reverse={true} />
            </Link>
          </li>
        </motion.ul>

        <motion.div
          layout
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
              className="hidden lg:flex font-bold wider text-lg items-center gap-2"
            >
              <span> Contact Me</span>
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </GoesOutComesInUnderline>
        </motion.div>
        <div className="flex lg:hidden">
          <SheetDemo />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
