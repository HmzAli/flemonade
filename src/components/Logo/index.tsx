import { FC } from 'react'
import './Logo.scss'

interface LogoProps {
  variant?: 'primary' | 'invert'
}

const Logo: FC<LogoProps> = ({ variant = 'primary' }) => {
  return (
    <div className={`logo logo--${variant}`}>
      <img src="/logo.svg" alt="Flemonade Logo" />
    </div>
  )
}

export default Logo 