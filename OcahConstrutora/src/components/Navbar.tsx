import { useState } from 'react'
import { navigationItems } from '../services/siteContent'
import '../styles/Navbar.css'
import { BrandMark } from './BrandMark'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <BrandMark />
        <button
          className="navbar__menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`navbar__navigation ${isMenuOpen ? 'navbar__navigation--open' : ''}`}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
