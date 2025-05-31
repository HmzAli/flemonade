import './Header.scss'
import Logo from '../Logo'
import Navbar from '../Navbar'
import { useState } from 'react'
import NavButton from '../NavButton'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header id="header">
      <div className="container">
        <div className="header-inner">
          <Logo variant="invert" />

          <NavButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </div>

      <Navbar isMenuOpen={isMenuOpen} />
    </header>
  )
}

export default Header
