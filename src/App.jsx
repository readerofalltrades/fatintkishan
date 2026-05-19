import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import BlogTeaser from './sections/BlogTeaser'
import Contact from './sections/Contact'
import NotFound from './pages/NotFound'
import FadeIn from './components/FadeIn'

function HomePage() {
  return (
    <>
      <Hero />
      <FadeIn><About /></FadeIn>
      <FadeIn delay={0.05}><Projects /></FadeIn>
      <FadeIn delay={0.05}><Skills /></FadeIn>
      <FadeIn delay={0.05}><BlogTeaser /></FadeIn>
      <FadeIn delay={0.05}><Contact /></FadeIn>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App