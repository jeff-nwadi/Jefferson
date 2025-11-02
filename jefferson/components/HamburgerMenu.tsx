import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Menu size={35} />
      </SheetTrigger>
      <SheetContent
        side="right"
      >
       
       <ul className='gap-8 flex flex-col py-33 pl-5'>
            <li><Link href="" className='text-3xl hover:underline font-bold'> About me </Link></li>
            <li><Link href="" className='text-3xl hover:underline font-bold'> works</Link></li>
            <li><Link href="" className='text-3xl hover:underline font-bold'> Connect</Link></li>
        </ul>

        <Link href="" className='hidden md:flex items-center gap-2 text-lg'> 
            Contact 
        </Link>

        <SheetFooter>
             <ul className='gap-5 flex'>
                <li><Link href="" className='text-lg hover:underline'><span>[</span> Instagram <span>]</span></Link></li>
                <li><Link href="" className='text-lg hover:underline'><span>[</span> Twitter <span>]</span></Link></li>
                <li><Link href="" className='text-lg hover:underline'><span>[</span> Github <span>]</span></Link></li>
            </ul>
          <SheetClose asChild className="mt-8">
            <h2 className="text-center flex-col flex gap-2">
               <span className="text-lg font-bold">+2348113239808</span>
                <span className="text-2xl font-bold">jefftech108@gmail.com</span>
            </h2>   
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
