import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Premium Features
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import CommandPalette from './components/CommandPalette';
import ThemeCustomizer from './components/ThemeCustomizer';
import { ThemeProvider } from './context/ThemeContext';
import Hero3D from './components/Hero3D';

// Pages
import CertificatesPage from './pages/CertificatesPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="bg-dark-bg min-h-screen text-white relative">
          <Hero3D />
          <div className="relative z-10">
            <ScrollProgress />
            <CustomCursor />
            <CommandPalette />
            <ThemeCustomizer />
            <BackToTop />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;