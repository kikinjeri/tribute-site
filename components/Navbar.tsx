"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">George Githii</div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>

      <ul className={`navLinks ${open ? "open" : ""}`}>
        <li>
          <Link href="/#home">Home</Link>
        </li>
        <li>
          <Link href="/#bio">Biography</Link>
        </li>
        <li>
          <Link href="/#career">Career</Link>
        </li>
        <li>
          <Link href="/#father">Father</Link>
        </li>
        <li>
          <Link href="/#tributes">Tributes</Link>
        </li>
      </ul>
    </nav>
  );
}
