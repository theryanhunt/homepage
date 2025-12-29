import { Link } from 'react-router-dom'
import { getAllPosts } from '../data/blogPosts'
import './Home.css'

export default function Home() {
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
    <div className="container home">
      <section className="hero">
        <h1>Hi, I'm [Your Name]</h1>
        <p className="hero-subtitle">
          [Your professional title or a brief description of what you do]
        </p>
        <p className="hero-description">
          Welcome to my personal space on the web. I'm passionate about [your interests/expertise].
          Here you'll find my thoughts, insights, and updates.
        </p>
      </section>

      <section className="thoughts">
        <h2>Thoughts</h2>
        <div className="posts-list">
          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <Link to={`/thoughts/${post.id}`} className="post-link">
                <div className="post-header">
                  <h3>{post.title}</h3>
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
      </section>
    </div>
  )
}
