import { useState, useEffect } from "react";

import BackToTop from './components/BackToTop'
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import FireParticles from "./components/FireParticles";
import CustomCursor from "./components/CustomCursor";

import Hero from "./sections/Hero";
import About from "./sections/About";
import University from "./sections/University";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <div className="app">
        <ScrollProgress />
        <FireParticles />
        <CustomCursor />
        <Navbar />

        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="university">
            <University />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="achievements">
            <Achievements />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}
