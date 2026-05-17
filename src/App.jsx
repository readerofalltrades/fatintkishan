import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import BlogTeaser from './sections/BlogTeaser'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <BlogTeaser/>
        <Contact/>
      </main>
      <Footer />
    </>
  )
}

export default App