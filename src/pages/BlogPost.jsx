import { useParams, Link } from 'react-router-dom'
import { getPostById } from '../data/blogPosts'
import './BlogPost.css'

export default function BlogPost() {
  const { id } = useParams()
  const post = getPostById(id)

  if (!post) {
    return (
      <div className="container blog-post">
        <div className="not-found">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/journal" className="back-link">
            ← Back to Journal
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="container blog-post">
      <Link to="/journal" className="back-link">
        ← Back to Journal
      </Link>

      <article>
        <header className="post-header-full">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <time className="post-date">{formatDate(post.date)}</time>
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="post-content">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return <h1 key={index}>{paragraph.slice(2)}</h1>
            } else if (paragraph.startsWith('## ')) {
              return <h2 key={index}>{paragraph.slice(3)}</h2>
            } else if (paragraph.startsWith('### ')) {
              return <h3 key={index}>{paragraph.slice(4)}</h3>
            } else if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n')
              return (
                <ul key={index}>
                  {items.map((item, i) => (
                    <li key={i}>{item.slice(2)}</li>
                  ))}
                </ul>
              )
            } else {
              return <p key={index}>{paragraph}</p>
            }
          })}
        </div>
      </article>
    </div>
  )
}
