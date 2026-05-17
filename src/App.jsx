import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import BlogTeaser from './sections/BlogTeaser'

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
      </main>
      <Footer />
    </>
  )
}

export default App