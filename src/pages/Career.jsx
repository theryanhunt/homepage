import './Career.css'

const experiences = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Company Name',
    period: '2022 - Present',
    description: 'Brief description of your role and key achievements. What technologies did you work with? What impact did you make?',
    highlights: [
      'Achievement or responsibility #1',
      'Achievement or responsibility #2',
      'Achievement or responsibility #3'
    ]
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Previous Company',
    period: '2020 - 2022',
    description: 'Description of your role and contributions in this position.',
    highlights: [
      'Key achievement or project',
      'Important contribution',
      'Technology or skill developed'
    ]
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'First Company',
    period: '2018 - 2020',
    description: 'Your first professional experience and what you learned.',
    highlights: [
      'Learning experience',
      'First major project',
      'Skills acquired'
    ]
  }
]

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    period: '2014 - 2018',
    description: 'Relevant coursework, honors, or achievements during your studies.'
  }
]

const skills = [
  'JavaScript/TypeScript',
  'React',
  'Node.js',
  'Python',
  'SQL/NoSQL',
  'Cloud Platforms (AWS/Azure/GCP)',
  'Docker & Kubernetes',
  'Git & CI/CD'
]

export default function Career() {
  return (
    <div className="container career">
      <h1>Career</h1>
      <p className="page-intro">
        A summary of my professional journey, education, and technical expertise.
      </p>

      <section className="career-section">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <span className="period">{exp.period}</span>
              </div>
              <p className="description">{exp.description}</p>
              <ul className="highlights">
                {exp.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="career-section">
        <h2>Education</h2>
        <div className="education-list">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-header">
                <div>
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                </div>
                <span className="period">{edu.period}</span>
              </div>
              <p className="description">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="career-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
