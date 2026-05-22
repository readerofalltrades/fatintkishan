import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <span className="cursor">_</span>readerofalltrades
      </a>

      <button
        className={`navbar-hamburger ${menuOpen ? "navbar-hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar-links ${menuOpen ? "navbar-links--open" : ""}`}>
        <li>
          <a href="/projects" onClick={() => setMenuOpen(false)}>
            Work
          </a>
        </li>
        <li>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
