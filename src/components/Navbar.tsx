import React from "react";
import Link from "next/link";

const Navbar = () => {
  const linkStyle = "rounded-lg border-color-border px-3.5 py-2 hover:border-2 hover:bg-color-navbar-hover";
  return (
    <nav className="fixed left-1/2 top-12 -translate-x-1/2 -translate-y-1/2 transform bg-color-main backdrop-blur-sm">
    <ul className="flex h-16 items-center justify-center gap-6">
     
      <li className={linkStyle}>
        <Link href="#">
          <p>About</p>
        </Link>
      </li>
      <li className={linkStyle}>
        <Link href="#">
          <p>Project</p>
        </Link>
      </li>
      <li className={linkStyle}>
        <Link href="#">
          <p>Skillset</p>
        </Link>
      </li>
      <li className={linkStyle}>
        <Link href="#">
          <p>Contact</p>
        </Link>
      </li>
    </ul>
  </nav>
  );
};

export default Navbar;
