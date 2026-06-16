import './Navbar.css';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={() => scrollTo('hero')}
      >
        N<span>. </span>Athirah
      </div>

      <div className="navbar-links">
        {links.map((link) => (
          <button
            key={link}
            className="navbar-link"
            onClick={() => scrollTo(link)}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}