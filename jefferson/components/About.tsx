import Image from 'next/image';
import Profile from '@/images/shedrack.jpg';
import AnimationScroll from "@/components/AnimationScroll"

export const About = () => {
  return (
    <main className="px-16 py-10">
      <h1 className=" text-center bg-black text-4xl md:text-6xl lg:text-8xl about-ctn text-amber-50 ">
        About Me
      </h1>
       <AnimationScroll />
    </main>
  );
};
