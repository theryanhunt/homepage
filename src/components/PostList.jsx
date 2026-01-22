import { Link } from 'react-router-dom'
import { formatDate } from '../lib/formatDate'

export default function PostList({ posts, linkPrefix, headingLevel = 'h2' }) {
  const HeadingTag = headingLevel

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <article key={post.id} className="post-card">
          <Link to={`${linkPrefix}${post.id}`} className="post-link">
            <div className="post-header">
              <HeadingTag>{post.title}</HeadingTag>
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
  )
}
