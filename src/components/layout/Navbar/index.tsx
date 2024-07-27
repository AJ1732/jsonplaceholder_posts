import { Button } from "@/components";
import { MenuIcon } from "@/components/svgs";

const Navbar = () => {
  return (
    <header className="content-grid relative bg-neutral-50 py-5 lg:pt-7">
      <nav className="flex size-full items-center justify-between">
        <h1 className="text-[clamp(1.5rem,_4vw,_2.25rem)] font-light">
          Posts
        </h1>

        <ul className="flex items-center justify-between gap-4 *:px-2 max-md:hidden">
          {["Home", "Users"].map((link) => (
            <li key={link} className="text-white">
              {link}
            </li>
          ))}
        </ul>

        <Button className="md:hidden">
          <MenuIcon fill="white" className="size-6" />
        </Button>
      </nav>

      {/* MOBILE VIEW */}
      <nav className="absolute top-full w-full rounded-md bg-neutral-300 px-4 py-8">
        <ul className="flex flex-col items-start justify-between gap-4 text-right *:px-2 md:hidden">
          {["Home", "Users"].map((link) => (
            <li key={link} className="text-xl font-light text-black">
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
