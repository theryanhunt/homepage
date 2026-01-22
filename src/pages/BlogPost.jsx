import { useParams, Link, useLocation } from 'react-router-dom'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { getPostById } from '../data/blogPosts'
import { formatDate } from '../lib/formatDate'
import './BlogPost.css'

const renderer = new marked.Renderer()
renderer.link = (href, title, text) => {
  const isExternal = /^https?:\/\//i.test(href || '')
  const rel = isExternal ? ' rel="noopener noreferrer"' : ''
  const target = isExternal ? ' target="_blank"' : ''
  const titleAttr = title ? ` title="${title}"` : ''
  return `<a href="${href}"${titleAttr}${target}${rel}>${text}</a>`
}

marked.use({ renderer })

export default function BlogPost() {
  const { id } = useParams()
  const location = useLocation()
  const post = getPostById(id)
  const isJournalPath = location.pathname.startsWith('/journal/')
  const backTarget = isJournalPath ? '/journal' : '/'
  const backLabel = isJournalPath ? 'Journal' : 'Thoughts'

  if (!post) {
    return (
      <div className="container blog-post">
        <div className="not-found">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to={backTarget} className="back-link">
            ← Back to {backLabel}
          </Link>
        </div>
      </div>
    )
  }

  const html = DOMPurify.sanitize(marked.parse(post.content))

  return (
    <div className="container blog-post">
      <Link to={backTarget} className="back-link">
        ← Back to {backLabel}
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
