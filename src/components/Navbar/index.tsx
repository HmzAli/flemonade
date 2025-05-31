import { Link } from 'react-router';
import './Navbar.scss'

interface NavbarProps {
  isMenuOpen: boolean;
}

const Navbar = ({ isMenuOpen }: NavbarProps) => {
  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/story" className="nav-link">Story</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar 