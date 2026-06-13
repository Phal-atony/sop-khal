import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
<<<<<<< HEAD
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
=======
import SmoothCursor from './components/SmoothCursor';
import SiteAudio from './components/SiteAudio';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090313] text-white selection:bg-violet-500/30 selection:text-white">
      <SmoothCursor />
      <SiteAudio />
>>>>>>> ee6f415 (fixed damn)
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
<<<<<<< HEAD
      <BackToTop />
=======
>>>>>>> ee6f415 (fixed damn)
    </div>
  );
}

export default App;
