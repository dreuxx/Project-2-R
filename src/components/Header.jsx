export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav page-width" aria-label="Main navigation">
        <a className="brand" href="#inicio" aria-label="RNA in 3D, home">
          <svg viewBox="0 0 32 40" width="28" height="36" aria-hidden="true">
            <path d="M8 37V15a8 8 0 0 1 16 0v22M8 23h16M8 29h16M8 35h16" />
          </svg>
          <span>
            RNA<span className="brand-subtitle">IN THREE DIMENSIONS</span>
          </span>
        </a>

        <ul className="nav-links" id="nav-links">
          <li>
            <a href="#explorar">
              <span>01</span> Explore
            </a>
          </li>
          <li>
            <a href="#conceptos">
              <span>02</span> The essentials
            </a>
          </li>
          <li>
            <a href="#tipos">
              <span>03</span> Types of RNA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
