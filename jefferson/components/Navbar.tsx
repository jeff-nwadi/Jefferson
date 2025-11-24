import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { SheetDemo } from '../components/HamburgerMenu';

const Navbar = () => {
  return (
    <main>
      <div className="flex justify-between px-3 md:px-6 lg:px-16 py-8 items-center">
        <Link
          href=""
          className="gap-0 flex flex-col logo leading-7 font-extrabold text-3xl"
        >
          Nwadi
          <br />
          Jefferson
        </Link>

        <ul className="hidden gap-12 md:flex ">
          <li>
            <Link href="" className="text-lg hover:underline">
              <span></span> About me <span></span>
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg hover:underline">
              <span></span> works <span></span>
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg hover:underline">
              <span></span> Connect <span></span>
            </Link>
          </li>
        </ul>

        <Link href="" className="hidden md:flex font-bold wider underline items-center gap-2 text-lg">
          Contact
          <ArrowUpRight className="w-6 h-6" />
        </Link>

        <div className="flex md:hidden">
          <SheetDemo />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
