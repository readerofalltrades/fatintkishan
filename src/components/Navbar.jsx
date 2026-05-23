import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <nav className="navbar">
      <a
        href="/"
        className="navbar-logo"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
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
        <li>
          <button
            className="navbar-theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={24} strokeWidth={1.5} />
            ) : (
              <Moon size={24} strokeWidth={1.5} />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
