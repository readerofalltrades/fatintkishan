import { useState } from 'react'
import './Hero.css'

const ENGLISH_NAME = 'Fatin Tazwar Kishan'
const BANGLA_NAME = 'ফাতিন তাজওয়ার কিষাণ'
const CHARS = 'আইউকখগঘঙচছজঝটডতথদনপফবমযরলশষসহ'

function scramble(target, progress) {
  return target.split('').map((char, i) => {
    if (char === ' ') return ' '
    if (i < Math.floor(progress * target.length)) return char
    return CHARS[Math.floor(Math.random() * CHARS.length)]
  }).join('')
}

function Hero() {
  const [displayName, setDisplayName] = useState(ENGLISH_NAME)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isBangla, setIsBangla] = useState(false)

  function animateTo(target, onDone, duration, switchFontAt) {
    if (isAnimating) return
    setIsAnimating(true)
    const steps = 20
    const interval = duration / steps
    let step = 0
    let fontSwitched = false
    const timer = setInterval(() => {
    step++
    const progress = step / steps
    setDisplayName(scramble(target, progress))
    if (!fontSwitched && progress >= 0.5) {
    fontSwitched = true
    if (switchFontAt) switchFontAt()
      }
      if (step >= steps) {
        clearInterval(timer)
        setDisplayName(target)
        setIsAnimating(false)
        if (onDone) onDone()
      }
    }, interval)
  } 

  function handleMouseEnter() {
    if (!isBangla) {
      animateTo(BANGLA_NAME, () => setIsBangla(true), 600, () => setIsBangla(true))
    }
  }

  function handleMouseLeave() {
    if (isBangla) {
      animateTo(ENGLISH_NAME, () => setIsBangla(false), 400, () => setIsBangla(false))
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ fontFamily: isBangla ? 'var(--font-bangla)' : 'var(--font-display)' }}
          >
            <span className="hero-name-text">{displayName}</span>
          </h1>
          <p className="hero-tagline">A Reader of all trades. Curious by Default. Segfaults Occasionally.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">See my work</a>
            <a href="#blog" className="btn btn-secondary">Read my blog</a>
          </div>
        </div>
        <div className="hero-image-placeholder">
          <span>photo coming soon</span>
        </div>
      </div>
    </section>
  )
}

export default Hero