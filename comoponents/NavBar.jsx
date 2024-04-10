import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className="font=bold text-orange-800 hover:underline font-orbitron"
          >
            Home
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            href="/reviews/"
            className="font=bold text-orange-800 hover:underline font-orbitron"
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            prefetch={false}
            className="font=bold text-orange-800 hover:underline font-orbitron"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
