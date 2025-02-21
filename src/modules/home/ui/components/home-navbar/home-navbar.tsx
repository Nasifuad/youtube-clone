import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "./search-input";

const HomeNavbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
        <div className="flex items-center gap-4 w-full">
          {/* menu and logo */}
          <div className="flex items-center flex-shrink-0">
            <SidebarTrigger />
            <div className="flex items-center gap-1 p-4">
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  alt="logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </Link>
              <p className="text-xl font-semibold tracking-tight">Next Tube</p>
            </div>
          </div>
          {/* search bar */}
          <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
            <SearchInput />
          </div>
          {/* auth button */}
          <div className="flex-shrink-0 items-center flex gap-4">
            <AuthButton />
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
