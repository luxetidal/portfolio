"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav id="nav-overall">
      <div id="nav-div">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`nav-a md:inline ${
              pathname === link.path ? "hidden md:inline" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;

