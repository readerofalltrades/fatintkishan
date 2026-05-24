import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import BlogTeaser from "./sections/BlogTeaser";
import Contact from "./sections/Contact";
import NotFound from "./pages/NotFound";
import FadeIn from "./components/FadeIn";
import SmoothFollowCursor from "./components/SmoothFollowCursor";
import AboutPage from "./pages/About";
function HomePage() {
  return (
    <>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn delay={0.05}>
        <Projects />
      </FadeIn>
      <FadeIn delay={0.05}>
        <Skills />
      </FadeIn>
      <FadeIn delay={0.05}>
        <BlogTeaser />
      </FadeIn>
      <FadeIn delay={0.05}>
        <Contact />
      </FadeIn>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SmoothFollowCursor
        dotColor="var(--yellow)"
        borderColor="var(--yellow)"
        dotSize={8}
        borderSize={28}
        hoverBorderSize={44}
        dotSpeed={0.3}
        borderSpeed={0.1}
        dotOpacity={1}
        borderOpacity={0.7}
        borderWidth={1}
      />
      <Navbar />
      <div className="margin-lines" aria-hidden="true" />
      <main style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
