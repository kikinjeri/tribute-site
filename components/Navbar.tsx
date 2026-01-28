"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">George Githii</div>

      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navLinks ${open ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#bio">Biography</a>
        </li>
        <li>
          <a href="#career">Career</a>
        </li>
        <li>
          <a href="#father">Father</a>
        </li>
        <li>
          <a href="#tributes">Tributes</a>
        </li>
      </ul>
    </nav>
  );
}
