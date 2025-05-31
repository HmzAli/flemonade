import { Link } from 'react-router';
import './Navbar.scss'

interface NavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const Navbar = ({ isMenuOpen, closeMenu }: NavbarProps) => {
  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/story" className="nav-link" onClick={closeMenu}>Story</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar 