"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const MobileHeader = () => {
  const [isOpenSheet, setIsOpenSheet] = useState(false);

  return (
    <header className="container lg:hidden z-50 flex items-center justify-between  fixed left-0 right-0 top-3">
      <div>
        <Image src={"/images/logo.png"} alt="logo" width={229} height={72} />
      </div>

      <Sheet onOpenChange={setIsOpenSheet} open={isOpenSheet}>
        <SheetTrigger asChild>
          <button>
            <Image
              src={"/Navbar/Menu-Icon.png"}
              alt="menu"
              width={32}
              height={32}
            />
          </button>
        </SheetTrigger>
        <SheetContent className="  bg-btnBg">
          <SheetHeader>
            <ul className="flex flex-col items-center gap-8">
              <li onClick={() => setIsOpenSheet(false)}>
                <Link
                  className="text-base font-medium text-white"
                  href={"#products"}
                >
                  Products
                </Link>
              </li>
              <li onClick={() => setIsOpenSheet(false)}>
                <Link
                  className="text-base font-medium text-white"
                  href={"#products"}
                >
                  Components
                </Link>
              </li>
              <li onClick={() => setIsOpenSheet(false)}>
                <Link
                  className="text-base font-medium text-white"
                  href={"#products"}
                >
                  About
                </Link>
              </li>
              <li onClick={() => setIsOpenSheet(false)}>
                <Link
                  className="text-base font-medium text-white"
                  href={"#products"}
                >
                  News Update
                </Link>
              </li>
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileHeader;
