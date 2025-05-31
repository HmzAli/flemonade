import { useEffect } from 'react'
import './Navbar.scss'

const Navbar = ({ isMenuOpen }) => {
  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul className="nav-list">
          <li>
            <a href="#" className="nav-link">Home</a>
          </li>
          <li>
            <a href="#" className="nav-link">Story</a>
          </li>
          <li>
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar 