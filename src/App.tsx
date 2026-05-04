import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import StatsBar from './sections/StatsBar';
import About from './sections/About';
import Process from './sections/Process';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import GitHubCTA from './sections/GitHubCTA';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-dark-bg text-text-primary antialiased">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Process />
        <TechStack />
        <Projects />
        <GitHubCTA />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
