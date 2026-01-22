import { Link } from 'react-router-dom'
import './BlogPost.css'

export default function NotFound() {
  return (
    <div className="container">
      <div className="not-found">
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="back-link">
          ← Back to Thoughts
        </Link>
      </div>
    </div>
  )
}
