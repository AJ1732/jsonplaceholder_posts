"use client";
import { Button } from "@/components";
import { MenuIcon } from "@/components/svgs";
import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className="content-grid fixed z-50 w-full bg-white/5 backdrop-blur-lg">
      <div className="full-width content-grid py-5 lg:pt-7">
        <nav className="flex size-full items-center justify-between">
          <h1 className="text-[clamp(1.5rem,_4vw,_2.25rem)] font-light">
            Posts
          </h1>

          <ul className="flex items-center justify-between gap-4 *:px-2 max-md:hidden">
            {["Home", "Posts"].map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>

          <Button
            className="md:hidden"
            onClick={() => setOpenNav((prev) => !prev)}
          >
            <MenuIcon fill="white" className="size-6" />
          </Button>
        </nav>

        {/* MOBILE VIEW */}
        <nav
          className={` ${openNav && "hidden"} full-width content-grid absolute inset-x-0 top-[100%] min-h-[calc(100dvh-5rem)] w-full bg-white/50 backdrop-blur-lg md:hidden`}
        >
          <div className="h-fit rounded-md bg-neutral-300 px-4 py-8">
            <ul className="flex flex-col items-start justify-between gap-4 text-right *:px-2">
              {["Home", "Posts"].map((link) => (
                <li key={link} className="text-xl font-light text-black">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
