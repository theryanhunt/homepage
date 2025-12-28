import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Your Name
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/career"
            className={`nav-link ${isActive('/career') ? 'active' : ''}`}
          >
            Career
          </Link>
          <Link
            to="/journal"
            className={`nav-link ${isActive('/journal') || location.pathname.startsWith('/journal/') ? 'active' : ''}`}
          >
            Journal
          </Link>
        </div>
      </div>
    </nav>
  )
}
