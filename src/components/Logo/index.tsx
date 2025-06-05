import { FC } from 'react'
import './Logo.scss'
import { Link } from 'react-router'

interface LogoProps {
  variant?: 'primary' | 'invert'
}

const Logo: FC<LogoProps> = ({ variant = 'primary' }) => {
  return (
    <div className={`logo logo--${variant}`}>
      <Link to="/"><img src="/logo.svg" alt="Flemonade Logo" /></Link>
    </div>
  )
}

export default Logo