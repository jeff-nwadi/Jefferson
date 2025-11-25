import Image from 'next/image';
import Profile from '@/images/shedrack.jpg';

export const About = () => {
  return (
    <main className="px-16 py-10 bg-black h-screen">
      <h1 className="text-center text-4xl md:text-6xl lg:text-8xl about-ctn text-amber-50 ">About Me</h1>
      <section className="py-18 flex  justify-center items-center">
        <div className='relative'>
            <div className='lg:w-1/4 lg:h-[54vh] bg-gray-400 '></div>
            <Image
                src={Profile}
                alt="Profile"
                width={100}
                height={100}
                className="lg:w-1/4 w-1/2 object-fill absolute -top-9 left-8 z-10"
            />
        </div>
        <div>
            <h3>text </h3>
        </div>
      </section>
    </main>
  );
};
