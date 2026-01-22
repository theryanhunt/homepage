import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation({ theme, onToggleTheme }) {
  const location = useLocation()
  const isThoughts = location.pathname === '/' || location.pathname.startsWith('/thoughts/')
  const isJournal = location.pathname === '/journal' || location.pathname.startsWith('/journal/')
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

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
            to="/journal"
            className={`nav-link ${isJournal ? 'active' : ''}`}
            end
          >
            Journal
          </NavLink>
          <NavLink
            to="/career"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Career
          </NavLink>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${nextTheme} mode`}
            aria-pressed={theme === 'dark'}
            title={`Switch to ${nextTheme} mode`}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === 'dark' ? '\\o/' : '( )'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}
