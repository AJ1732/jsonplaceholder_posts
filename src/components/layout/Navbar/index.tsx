"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components";
import { MenuIcon } from "@/components/svgs";
import { useNavScrollAnimation } from "@/hooks";

const Navbar = () => {
  const navlinks = [
    { title: "Home", link: "/" },
    { title: "Posts", link: "/posts" },
  ];

  const [openNav, setOpenNav] = useState(false);
  const [navColor, navScroll] = useNavScrollAnimation();

  return (
    <header
      className={`content-grid fixed z-50 w-full transition-all duration-300 ${navColor ? "bg-white" : "bg-transparent"} ${
        navScroll ? "-translate-y-28 opacity-0" : "translate-x-0 drop-shadow-md opacity-100"
      } `}
    >
      <div className="full-width content-grid py-5 lg:pt-7">
        <nav className="flex size-full items-center justify-between">
          <h1 className="text-[clamp(1.5rem,_4vw,_2.25rem)] font-light">
            <Link href={`/`}>...</Link>
          </h1>

          <ul className="flex items-center justify-between gap-4 *:px-2 max-md:hidden">
            {navlinks.map(({ title, link }) => (
              <li key={title}>
                <Link href={link}>{title}</Link>
              </li>
            ))}
          </ul>

          <Button
            className="md:hidden"
            onClick={() => setOpenNav((prev) => !prev)}
          >
            <MenuIcon fill="white" className="size-6" />
          </Button>
        </nav>

        {/* MOBILE VIEW NAVIGATION */}
        <div
          className={` ${!openNav && "hidden"} full-width content-grid absolute inset-x-0 top-[100%] min-h-[calc(100dvh-5rem)] w-full md:hidden`}
        >
          {/* OVERLAY */}
          <div
            onClick={() => setOpenNav((prev) => !prev)}
            className="full-width absolute inset-0 size-full bg-white/50 backdrop-blur-lg"
          ></div>

          {/* MOBILE NAV */}
          <nav className="z-10 mt-10 h-fit rounded-md bg-neutral-300 px-4 py-8">
            <ul className="flex flex-col items-center justify-between text-right *:px-6 *:py-3">
              {navlinks.map(({ title, link }) => (
                <li
                  key={title}
                  onClick={() => setOpenNav((prev) => !prev)}
                  className="text-lg font-light text-black"
                >
                  <Link href={link} className="block">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
