import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import TechStack from "./components/techstack/TechStack";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";
import CursorParticles from "./components/effects/CursorParticles";
import LeavesBackground from "./components/effects/LeavesBackground";
import Achievements from "./components/achievements/Achievements";
import Contact from "./components/contact/Contact";
import FloatingContact from "./components/contact/FloatingContact";
import Footer from "./components/layout/Footer";

import MatrixBackground from "./components/hero/MatrixBackground";

function App() {

  return (

    <div className="relative bg-black text-white overflow-hidden">

  <LeavesBackground />

  <CursorParticles />

  <MatrixBackground />

  <div className="relative z-10">
        <Navbar />

        <Hero />

        <About />

        <Experience />

        <TechStack />

        <Projects />

        <Certificates />

        <CursorParticles />

        <Achievements />

        <Contact />

        <Footer />

      </div>

      <FloatingContact />

    </div>

  );
}

export default App;