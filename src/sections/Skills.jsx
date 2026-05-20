import { useState, useEffect } from 'react'
import './Skills.css'
import skills from '../data/skills'

function SkillCard({ name, topics, icon: Icon }) {
  const [active, setActive] = useState(false)

  function handleMouseEnter() { setActive(true) }
  function handleMouseLeave() { setActive(false) }
  function handleClick() {
    if (window.matchMedia('(hover: none)').matches) {
      setActive(prev => !prev)
    }
  }

  return (
    <div
      className={`skill-card ${active ? 'skill-card--hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="skill-card-front">
        <Icon size={22} strokeWidth={1.5} color="var(--yellow)" />
        <div className="skill-card-meta">
          <span className="skill-name">{name}</span>
          <span className="skill-count">{topics.length} topics</span>
        </div>
      </div>
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
  const [lcStats, setLcStats] = useState(null)

  useEffect(() => {
    fetch('https://codeforces.com/api/user.info?handles=readerofalltrades')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'OK') setCfRating(data.result[0].rating)
      })
      .catch(() => setCfRating('N/A'))
  }, [])

  useEffect(() => {
    fetch('https://alfa-leetcode-api.onrender.com/fatintkishan/solved')
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 'error') {
          setLcStats({
            easy: data.easySolved,
            medium: data.mediumSolved,
            hard: data.hardSolved,
          })
        } else {
          setLcStats('N/A')
        }
      })
      .catch(() => setLcStats('N/A'))
  }, [])

  const lcDisplay = lcStats === null
    ? '...'
    : lcStats === 'N/A'
    ? 'N/A'
    : `${lcStats.easy} | ${lcStats.medium} | ${lcStats.hard}`

  return (
    <section className="skills-snapshot">
      <div className="skills-content">
        <div className="skills-header">
          <h2 className="section-label">Skills</h2>
          <div className="skills-stats">
            <span className="lc-rating">
              LC: <span className="lc-easy">{lcStats === null ? '...' : lcStats === 'N/A' ? 'N/A' : lcStats.easy}</span>
              {' | '}
              <span className="lc-medium">{lcStats === null ? '...' : lcStats === 'N/A' ? 'N/A' : lcStats.medium}</span>
              {' | '}
              <span className="lc-hard">{lcStats === null ? '...' : lcStats === 'N/A' ? 'N/A' : lcStats.hard}</span>
            </span>
            <span className="cf-rating">
              CF: <span className="cf-value">{cfRating !== null ? cfRating : '...'}</span>
            </span>
          </div>
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