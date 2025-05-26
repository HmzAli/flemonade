import './Header.scss'
import Logo from "../Logo"

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <Logo variant="invert" />
            </div>
        </header>
    )
}

export default Header
