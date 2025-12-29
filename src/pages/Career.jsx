import './Career.css'

const experiences = [
  {
    id: 1,
    title: 'Senior Manager, Corporate Development Integration',
    company: 'Amazon',
    period: 'October 2022 – Present',
    description:
      'Lead global acquisitions end-to-end with a focus on diligence quality, integration readiness, and measurable post-close outcomes.',
    highlights: [
      'Drive AI-focused acquisitions across Devices & Services and AWS, resolving complex regulatory, privacy, and operational dependencies',
      'Design and execute integration strategies that connect deal thesis to customer, product, and financial results',
      'Build repeatable mechanisms for cross-functional governance, risk management, and executive reporting'
    ]
  },
  {
    id: 2,
    title: 'Corporate Development, M&A Integration',
    company: 'Stripe',
    period: 'January 2022 – September 2022',
    description: 'Led diligence and integration for international acquisitions in a rapidly scaling product portfolio.',
    highlights: [
      'Coordinated global teams to remove blockers, align launch plans, and protect deal value',
      'Created integration playbooks and KPI dashboards that improved readiness across product, eng, and GTM teams',
      'Established executive operating rhythms to surface risks and highlight milestone achievements'
    ]
  },
  {
    id: 3,
    title: 'M&A Recruiting Operations',
    company: 'Meta',
    period: 'May 2018 – December 2021',
    description:
      'Partnered with Corporate Development to evaluate targets, steward due diligence, and integrate acquired teams.',
    highlights: [
      'Guided acquired leadership through onboarding, governance, and performance alignment to deal objectives',
      'Partnered across legal, finance, product, and people teams to navigate large, complex acquisitions',
      'Built dashboards and processes that kept leaders informed and mitigated integration risk'
    ]
  },
  {
    id: 4,
    title: 'Recruiting',
    company: 'Meta',
    period: 'January 2017 – May 2018',
    description: 'Full-cycle recruiting across technical and business roles during a period of rapid growth.',
    highlights: [
      'Managed sourcing, screening, and closing strategies for high-priority roles',
      'Partnered with hiring managers to forecast needs and calibrate selection criteria'
    ]
  },
  {
    id: 5,
    title: 'Recruiting',
    company: 'Apple & Aerotek',
    period: 'May 2013 – February 2016',
    description: 'Developed foundational recruiting and stakeholder management skills across diverse teams.',
    highlights: [
      'Executed full-cycle recruiting for technical and corporate functions',
      'Built consistent candidate pipelines while elevating hiring team collaboration'
    ]
  }
]

const education = [
  {
    id: 1,
    degree: 'Bachelor of Arts, Political Science',
    institution: 'Sonoma State University',
    period: 'Class of 2016',
    description: ''
  }
]

export default function Career() {
  return (
    <div className="container career">
      <h1>Career</h1>
      <p className="page-intro">
        Corporate development leader specializing in M&A diligence and integration for technology companies, uniting cross-functional teams to deliver deal value, operational readiness, and sustainable growth.
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
    </div>
  )
}
