import './Contact.css'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCodeforces } from 'react-icons/si'

const socials = [
  { label: 'Email', href: 'mailto:fatintkishan@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/readeroaltrades', icon: FaGithub },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/readeroaltrades', icon: SiCodeforces },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/fatintkishan', icon: FaLinkedin },
]

function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="section-label">Contact</h2>
        <div className="contact-stamps">
          {socials.map((s) => {
            const Icon = s.icon
            return (
              <a key={s.label} href={s.href} className="stamp" target="_blank" rel="noreferrer">
                <Icon size={14} />
                {s.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact