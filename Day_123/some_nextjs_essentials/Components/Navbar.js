import Link from "next/link";
// import Link from "next/link";
const Navbar = () => {
  return (
    <nav >
      <ul className="flex gap-4 p-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/ImageComponent">ImageComponent</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
