import Image from 'next/image';
import Profile from '@/images/shedrack.jpg';

export const About = () => {
  return (
    <main className="px-16 py-10">
      <h1 className="text-center text-4xl md:text-6xl lg:text-8xl about-ctn text-amber-50 ">
        About Me
      </h1>
      <div className="my-16 md:flex md:justify-between lg:flex gap-6 justify-center">
        <div className='pb-8'>
          <Image src={Profile} alt="" width={350} height={200} className="" />
        </div>
        <div className="md:w-1/2 w-full text-white ">
          <h2 className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, laborum
            quisquam! Debitis soluta maxime nulla dolorum quibusdam neque velit
            assumenda cum qui, harum itaque culpa corporis molestias porro
            labore praesentium.
          </h2>
          <div className='py-12'>
            <h2 className='py-6 text-2xl text-red-500'>Skills</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              commodi minima veniam cum debitis quia reprehenderit eveniet
              aliquid cupiditate exercitationem, harum expedita atque, magnam
              officia labore deserunt, nostrum ipsam dicta.
            </p>
          </div>
          <div className='py-12'>
            <h2 className='py-6 text-2xl text-red-500'>Skills</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              commodi minima veniam cum debitis quia reprehenderit eveniet
              aliquid cupiditate exercitationem, harum expedita atque, magnam
              officia labore deserunt, nostrum ipsam dicta.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
