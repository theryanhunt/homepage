import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navigation.css'

const THEMES = [
  { id: 'wave', label: 'Wave', icon: '◐' },
  { id: 'dragon', label: 'Dragon', icon: '◑' },
  { id: 'lotus', label: 'Lotus', icon: '○' },
]

export default function Navigation({ theme, onSetTheme }) {
  const location = useLocation()
  const isThoughts = location.pathname === '/' || location.pathname.startsWith('/thoughts/')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleThemeSelect = (themeId) => {
    onSetTheme(themeId)
    setIsOpen(false)
  }

  const currentTheme = THEMES.find((t) => t.id === theme) || THEMES[0]

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Ryan Hunt
        </Link>
        <div className="nav-links">
          <NavLink
            to="/"
            className={`nav-link ${isThoughts ? 'active' : ''}`}
            end
          >
            Thoughts
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Career
          </NavLink>
          <div className="theme-selector" ref={dropdownRef}>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Select theme"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
            >
              <span className="theme-toggle-icon" aria-hidden="true">*</span>
            </button>
            {isOpen && (
              <div className="theme-dropdown" role="listbox" aria-label="Theme options">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`theme-option ${t.id === theme ? 'active' : ''}`}
                    onClick={() => handleThemeSelect(t.id)}
                    role="option"
                    aria-selected={t.id === theme}
                  >
                    <span className="theme-option-icon">{t.icon}</span>
                    <span className="theme-option-label">{t.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
