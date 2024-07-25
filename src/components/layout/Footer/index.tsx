const Footer = () => {
  return (
    <footer className="content-grid h-fit min-h-60 bg-neutral-800 py-9 text-neutral-50">
      <div className="flex w-full flex-col items-center justify-between">
        <div className="flex w-full justify-between">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Users</li>
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
