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
          Ryan Hunt
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${isActive('/') || location.pathname.startsWith('/thoughts/') ? 'active' : ''}`}
          >
            Thoughts
          </Link>
          <Link
            to="/career"
            className={`nav-link ${isActive('/career') ? 'active' : ''}`}
          >
            Career
          </Link>
        </div>
      </div>
    </nav>
  )
}
