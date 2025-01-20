"use client"

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from 'react-icons/ci';

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },

];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries size={24} className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col"></SheetContent>
        <div>logo</div>
    </Sheet>
  );
};

export default MobileNav;
