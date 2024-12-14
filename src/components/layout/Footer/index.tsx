import Link from "next/link";

const Footer = () => {
  const navlinks = [
    { title: "Home", link: "/" },
    { title: "Posts", link: "/posts" },
  ];

  return (
    <footer>
      <section className="content-grid h-fit min-h-60 bg-neutral-950 py-9 text-neutral-50">
        <div className="flex w-full flex-col items-center justify-between">
          <div className="flex w-full justify-between">
            <ul className="flex gap-4">
              {navlinks.map(({ title, link }) => (
                <li key={title}>
                  <Link href={link}>{title}</Link>
                </li>
              ))}
            </ul>

            <h2 className="text-4xl font-light">Posts</h2>
          </div>

          <div className="flex w-full justify-between">
            <p></p>
            <p>JSONPLACEHOER</p>
          </div>
        </div>
      </section>

      <div
        className={`font-josefin relative h-60 w-full bg-neutral-950`}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <section className="fixed bottom-0 flex h-32 w-full items-center justify-center bg-neutral-900 text-white">
          <div className="flex w-full items-center justify-center gap-4 py-4 text-center">
            <p className="font-medium tracking-wide">Engineered by </p>

            <Link
              href="mailto:ejemeniboi@gmail.com"
              className="flex items-center justify-center gap-1 text-xl"
            >
              <span className="flex h-10 w-8 items-center justify-center bg-orange-500 pt-0.5 text-neutral-800">
                17
              </span>
              <span className="pt-0.5">32</span>
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
