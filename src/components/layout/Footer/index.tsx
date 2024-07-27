import Link from "next/link";

const Footer = () => {
  const navlinks = [
    { title: "Home", link: "/" },
    { title: "Posts", link: "/posts" },
  ];

  return (
    <footer className="content-grid h-fit min-h-60 bg-neutral-950 py-9 text-neutral-50">
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
          <p>Copyright</p>
          <p>JSONPLACEHOER</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
