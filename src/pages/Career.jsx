import './Career.css'

const experiences = [
  {
    id: 1,
    title: 'Senior Manager, Corporate Development Integration',
    company: 'Amazon',
    period: 'October 2022 - Present',
    description: 'Leading global acquisitions with oversight of due diligence, integration planning, and post-close execution.',
    highlights: [
      'Lead global acquisitions, managing cross-functional teams to ensure acquisition goals are achieved',
      'Develop strategic integration plans and continuously improve integration processes and best practices',
      'Deliver AI-focused acquisitions across Devices & Services and AWS, shaping integration strategy and resolving complex regulatory and privacy challenges'
    ]
  },
  {
    id: 2,
    title: 'Corporate Development, M&A Integration',
    company: 'Stripe',
    period: 'January 2022 - September 2022',
    description: 'Led diligence and integration processes for international acquisitions.',
    highlights: [
      'Coordinated highly cross-functional teams and drove issue resolution for international acquisitions',
      'Built and executed integration strategies to support the growing M&A function',
      'Created and presented executive dashboards and reports to track progress and highlight key wins'
    ]
  },
  {
    id: 3,
    title: 'M&A Recruiting Operations',
    company: 'Meta',
    period: 'May 2018 - December 2021',
    description: 'Supported Corporate Development team with early company evaluation, due diligence, and integration of acquired companies.',
    highlights: [
      'Advised Meta and acquired leadership teams to validate acquisition rationale and mitigate risks',
      'Partnered with cross-functional teams to navigate large, complex acquisitions with long-term strategic impact',
      'Ensured objectives were met throughout the integration process'
    ]
  },
  {
    id: 4,
    title: 'Recruiting',
    company: 'Meta',
    period: 'January 2017 - May 2018',
    description: 'Full-cycle recruiting experience including sourcing, screening, and hiring.',
    highlights: [
      'Managed end-to-end recruiting processes',
      'Developed candidate pipelines and screening strategies'
    ]
  },
  {
    id: 5,
    title: 'Recruiting',
    company: 'Apple & Aerotek',
    period: 'May 2013 - February 2016',
    description: 'Full-cycle recruiting experience including sourcing, screening, and hiring.',
    highlights: [
      'Executed full-cycle recruiting across multiple roles',
      'Built foundational recruiting and talent acquisition skills'
    ]
  }
]

const education = [
  {
    id: 1,
    degree: 'Bachelor of Arts, Political Science',
    institution: 'Sonoma State University',
    period: '2016',
    description: ''
  }
]

const skills = [
  'Corporate Development',
  'M&A Integration',
  'Due Diligence',
  'Cross-functional Leadership',
  'Strategic Planning',
  'Project Management',
  'Executive Communication',
  'Talent Acquisition'
]

export default function Career() {
  return (
    <div className="container career">
      <h1>Career</h1>
      <p className="page-intro">
        Adaptable, results-driven leader with extensive experience in corporate development, business operations, and cross-functional team leadership.
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
