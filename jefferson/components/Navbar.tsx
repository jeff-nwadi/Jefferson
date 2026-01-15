import Image from 'next/image'
import Menu from '../images/Menu.svg'

export const Navbar = () => {
  return (
    <div className=''>
        <div className='flex justify-between px-6 md:px-20 lg:px-70 items-center py-10 md:py-20'>
            <div className='heading-text text-xl'>Jefferson</div>
            <div>
                <Image src={Menu} alt="Menu" />
            </div>
        </div>
    </div>
  )
}
