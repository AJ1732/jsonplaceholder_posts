const Navbar = () => {
  return (
    <header className="content-grid bg-neutral-50 py-5 lg:pt-7">
      <nav className="flex size-full items-center justify-between">
        <h1 className="text-[clamp(1.25rem,_4vw,_2.25rem)] font-light">
          Navbar
        </h1>

        <ul className="flex items-center justify-between gap-4 *:px-2">
          <li>Home</li>
          <li>Users</li>
          {/* <li>Home</li> */}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
