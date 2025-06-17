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
            <Link to="/about-us" className="nav-link" onClick={closeMenu}>Story</Link>
          </li>
          <li>
            <Link to="/partner" className="nav-link" onClick={closeMenu}>Partner with us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar 