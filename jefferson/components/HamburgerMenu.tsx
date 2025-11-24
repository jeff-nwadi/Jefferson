import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Menu size={30} />
      </SheetTrigger>
      <SheetContent side="left">
        <ul className="gap-8 flex flex-col py-33 pl-5">
          <li>
            <Link href="" className="text-lg hover:underline font-bold">
              works
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg hover:underline font-bold">
              About me
            </Link>
          </li>
          <li>
            <Link href="" className="text-lg hover:underline font-bold">
              Connect
            </Link>
          </li>
        </ul>

        <div>
          <ul className="gap-3 flex pl-5">
            <li>
              <Link href="" className="text-sm hover:underline">
                <span></span> Instagram <span></span>
              </Link>
            </li>
            <li>
              <Link href="" className="text-sm hover:underline">
                <span></span> Twitter <span></span>
              </Link>
            </li>
            <li>
              <Link href="" className="text-sm hover:underline">
                <span></span> Github <span></span>
              </Link>
            </li>
          </ul>
        </div>    
      </SheetContent>
    </Sheet>
  );
}
