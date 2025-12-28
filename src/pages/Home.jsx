import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="container home">
      <section className="hero">
        <h1>Hi, I'm [Your Name]</h1>
        <p className="hero-subtitle">
          [Your professional title or a brief description of what you do]
        </p>
        <p className="hero-description">
          Welcome to my personal space on the web. I'm passionate about [your interests/expertise].
          Here you'll find my career journey, thoughts, and projects.
        </p>
      </section>

      <section className="quick-links">
        <div className="quick-link-card">
          <h3>Career</h3>
          <p>Explore my professional experience and background</p>
          <Link to="/career" className="link-button">
            View Career →
          </Link>
        </div>
        <div className="quick-link-card">
          <h3>Journal</h3>
          <p>Read my thoughts, insights, and updates</p>
          <Link to="/journal" className="link-button">
            Read Journal →
          </Link>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          [Add a brief bio about yourself. You can describe your background,
          interests, skills, or what drives you professionally.]
        </p>
        <p>
          [Feel free to add more paragraphs about your journey, current focus,
          or what you're working on.]
        </p>
      </section>
    </div>
  )
}
