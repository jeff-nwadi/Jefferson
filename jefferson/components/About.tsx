import Image from 'next/image'
import Profile from "@/images/shedrack.jpg"

export const About = () => {
  return (
    <main className='px-16 py-24 bg-black h-screen'>
        <h1 className='text-center text-8xl about-ctn text-amber-50'>About Me</h1>
        <section className=''>
            <div >
                <Image src={Profile} alt='Profile' width={100} height={100} className='w-fit w-dvh' />
            </div>
        </section>
    </main>
  )
}
