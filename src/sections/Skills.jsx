import { useState, useEffect } from 'react'
import './Skills.css'
import skills from '../data/skills'

function SkillCard({ name, topics }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`skill-card ${hovered ? 'skill-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="skill-name">{name}</span>
      <div className="skill-topics">
        {topics.map((topic) => (
          <span key={topic} className="skill-topic">{topic}</span>
        ))}
      </div>
    </div>
  )
}

function Skills() {
  const [cfRating, setCfRating] = useState(null)

  useEffect(() => {
    fetch('https://codeforces.com/api/user.info?handles=readerofalltrades')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'OK') {
          setCfRating(data.result[0].rating)
        }
      })
      .catch(() => setCfRating('N/A'))
  }, [])

  return (
    <section className="skills-snapshot">
      <div className="skills-content">
        <div className="skills-header">
          <h2 className="section-label">Skills</h2>
          <span className="cf-rating">
            CF Rating:{' '}
            <span className="cf-value">
              {cfRating !== null ? cfRating : '...'}
            </span>
          </span>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills