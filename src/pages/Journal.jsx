import { getAllPosts } from '../data/blogPosts'
import PostList from '../components/PostList'
import './Journal.css'

export default function Journal() {
  const posts = getAllPosts()

  return (
    <div className="container journal">
      <h1>Journal</h1>
      <p className="page-intro">
        Thoughts, insights, and updates on technology, career, and personal growth.
      </p>

      <PostList posts={posts} linkPrefix="/journal/" />
    </div>
  )
}
