import './Header.scss'
import Logo from "../Logo"

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header-inner">
          <Logo variant="invert" />

          <a className="menu-button" id="menu-btn"></a>
        </div>
      </div>
    </header>
  )
}

export default Header
