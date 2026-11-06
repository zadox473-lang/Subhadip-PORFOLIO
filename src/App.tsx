import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import PageTransition from "./components/PageTransition";
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
  return (
    <>
      <FireParticles />
      <CustomCursor />
      <Loader />

      <ScrollProgress />
      <Navbar />

      <PageTransition>
        <main>
          <Hero />
          <About />
          <University />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </PageTransition>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: #070707;
        }

        body {
          margin: 0;
          min-width: 320px;
          background: #070707;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        ::selection {
          background: #ff6426;
          color: #ffffff;
        }

        ::-webkit-scrollbar {
          width: 7px;
        }

        ::-webkit-scrollbar-track {
          background: #080808;
        }

        ::-webkit-scrollbar-thumb {
          background: #a83b16;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #ff6426;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
}
