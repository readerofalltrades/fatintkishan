import './Contact.css'

const socials = [
  { label: 'Email', href: 'mailto:fatintkishan@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/readeroaltrades' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/readeroaltrades' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/fatintkishan' },
]

function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="section-label">Contact</h2>
        <div className="contact-stamps">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="stamp" target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact