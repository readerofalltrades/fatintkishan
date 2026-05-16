import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Hero/>
      </main>
      <Footer />
    </>
  )
}

export default App