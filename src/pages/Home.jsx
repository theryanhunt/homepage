import { getAllPosts } from '../data/blogPosts'
import PostList from '../components/PostList'
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
        <PostList posts={posts} linkPrefix="/thoughts/" headingLevel="h3" />
      </section>
    </div>
  )
}
