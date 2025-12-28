import { Link } from 'react-router-dom'
import { getAllPosts } from '../data/blogPosts'
import './Journal.css'

export default function Journal() {
  const posts = getAllPosts()

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="container journal">
      <h1>Journal</h1>
      <p className="page-intro">
        Thoughts, insights, and updates on technology, career, and personal growth.
      </p>

      <div className="posts-list">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <Link to={`/journal/${post.id}`} className="post-link">
              <div className="post-header">
                <h2>{post.title}</h2>
                <time className="post-date">{formatDate(post.date)}</time>
              </div>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="read-more">Read more →</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
