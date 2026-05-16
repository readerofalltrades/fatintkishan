import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">_readerofalltrades</a>
      <ul className="navbar-links">
        <li><a href="/projects">Work</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  )
}

export default Navbar