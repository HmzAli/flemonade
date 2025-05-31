import './NavButton.scss'

interface NavButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const NavButton = ({ isOpen, onClick }: NavButtonProps) => {
  return (
    <a 
      className={`nav-button ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label="Toggle navigation menu"
    >
      <div className="menu-btw-wrapper">
        <img src="./menu-button.png" className="menu-btn menu-btn-open" />
        <img src="./menu-button-close.png" className="menu-btn menu-btn-close" />
      </div>
    </a>
  )
}

export default NavButton 