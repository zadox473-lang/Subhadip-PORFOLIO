import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import About from "./sections/About";
import University from "./sections/University";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          background: #080808;
        }

        body {
          margin: 0;
          padding: 0;
          background: #080808;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        a {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          font-family: inherit;
        }

        ::selection {
          background: #ff642e;
          color: white;
        }

        section {
          scroll-margin-top: 75px;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <About />
        <University />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;
