import { Link } from 'react-router-dom'
import { getAllPosts } from '../data/blogPosts'
import { formatDate } from '../lib/formatDate'
import './Home.css'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="container home">
      <section className="hero">
        <h1>Hi, I'm Ryan</h1>
        <p className="hero-subtitle">
          Corporate Development Integration at Amazon
        </p>
        <p className="hero-description">
          Welcome to my personal space on the web.
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
