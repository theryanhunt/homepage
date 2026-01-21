import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { getPostById } from '../data/blogPosts'
import { formatDate } from '../lib/formatDate'
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
          <Link to="/" className="back-link">
            ← Back to Thoughts
          </Link>
        </div>
      </div>
    )
  }

  const html = marked.parse(post.content)

  return (
    <div className="container blog-post">
      <Link to="/" className="back-link">
        ← Back to Thoughts
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

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  )
}
