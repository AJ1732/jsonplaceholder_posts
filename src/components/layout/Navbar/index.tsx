"use client";
import { useState } from "react";
import { Button } from "@/components";
import { MenuIcon } from "@/components/svgs";
import { useNavScrollAnimation } from "@/hooks";

const Navbar = () => {
  const navlinks = ["Home", "Posts"];

  const [openNav, setOpenNav] = useState(false);
  const [navColor, navScroll] = useNavScrollAnimation();

  return (
    <header
      className={`content-grid fixed z-50 w-full transition-all duration-300 ${navColor ? "bg-white" : "bg-transparent"} ${
        navScroll ? "-translate-y-28 opacity-0" : "translate-x-0 opacity-100"
      } `}
    >
      <div className="full-width content-grid py-5 lg:pt-7">
        <nav className="flex size-full items-center justify-between">
          <h1 className="text-[clamp(1.5rem,_4vw,_2.25rem)] font-light">...</h1>

          <ul className="flex items-center justify-between gap-4 *:px-2 max-md:hidden">
            {navlinks.map((link) => (
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
          className={` ${!openNav && "hidden"} full-width content-grid absolute inset-x-0 top-[100%] min-h-[calc(100dvh-5rem)] w-full bg-white/50 backdrop-blur-lg md:hidden`}
        >
          <div className="h-fit rounded-md bg-neutral-300 px-4 py-8">
            <ul className="flex flex-col items-start justify-between gap-4 text-right *:px-2">
              {navlinks.map((link) => (
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
