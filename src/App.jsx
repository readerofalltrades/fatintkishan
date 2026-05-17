import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Hero/>
        <About/>
      </main>
      <Footer />
    </>
  )
}

export default App