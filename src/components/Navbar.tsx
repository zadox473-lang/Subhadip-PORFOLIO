import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "University", id: "university" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Achievements", id: "achievements" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);

      let current = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && window.scrollY >= section.offsetTop - 180) {
          current = link.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <style>{`
        .premium-navbar {
          position: fixed;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: min(92%, 1380px);
          height: 76px;
          padding: 0 28px;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 17px;
          background: rgba(12,10,9,.65);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          transition: .3s ease;
          box-sizing: border-box;
        }

        .premium-navbar.scrolled {
          background: rgba(9,8,8,.94);
          border-color: rgba(255,95,45,.25);
          box-shadow: 0 12px 45px rgba(0,0,0,.35);
        }

        .premium-navbar * {
          box-sizing: border-box;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          border: 0;
          background: transparent;
          color: white;
          cursor: pointer;
          text-align: left;
        }

        .nav-brand-symbol {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 11px;
          background: linear-gradient(135deg,#ff471e,#ff873c);
          color: white;
          font-size: 20px;
          font-weight: 950;
          box-shadow: 0 0 25px rgba(255,75,30,.25);
        }

        .nav-brand-name {
          font-size: 15px;
          font-weight: 950;
          letter-spacing: 1.8px;
        }

        .nav-brand-name span {
          color: #ff6b38;
        }

        .nav-brand-sub {
          display: block;
          margin-top: 4px;
          font-size: 8px;
          color: #888;
          letter-spacing: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: clamp(13px, 2vw, 28px);
        }

        .nav-link {
          position: relative;
          padding: 10px 0;
          border: 0;
          background: transparent;
          color: #aaa;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .8px;
          cursor: pointer;
          transition: .25s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: white;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 2px;
          height: 2px;
          background: #ff572b;
          box-shadow: 0 0 10px #ff572b;
        }

        .nav-contact {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 17px;
          border-radius: 9px;
          color: white;
          background: linear-gradient(110deg,#ed431e,#ff7837);
          text-decoration: none;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1px;
          transition: .3s ease;
        }

        .nav-contact:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255,75,30,.3);
        }

        .nav-mobile-toggle {
          display: none;
          place-items: center;
          width: 43px;
          height: 43px;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 10px;
          color: white;
          background: rgba(255,255,255,.04);
          cursor: pointer;
        }

        .nav-mobile-menu {
          position: fixed;
          top: 105px;
          left: 4%;
          width: 92%;
          padding: 17px;
          border: 1px solid rgba(255,100,55,.25);
          border-radius: 16px;
          background: rgba(12,10,9,.97);
          backdrop-filter: blur(22px);
          box-shadow: 0 20px 60px rgba(0,0,0,.6);
          z-index: 999;
        }

        .nav-mobile-link {
          width: 100%;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: transparent;
          color: #ccc;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-align: left;
          cursor: pointer;
        }

        .nav-mobile-link.active {
          color: #ff7745;
        }

        @media(max-width: 1050px) {
          .nav-links {
            gap: 13px;
          }

          .nav-link {
            font-size: 9px;
          }
        }

        @media(max-width: 850px) {
          .premium-navbar {
            top: 10px;
            height: 66px;
            padding: 0 16px;
          }

          .nav-links,
          .nav-contact {
            display: none;
          }

          .nav-mobile-toggle {
            display: grid;
          }
        }
      `}</style>

      <header className={`premium-navbar ${scrolled ? "scrolled" : ""}`}>
        <button
          className="nav-brand"
          onClick={() => navigate("home")}
          aria-label="Go to home"
        >
          <span className="nav-brand-symbol">S</span>

          <span className="nav-brand-name">
            SUBHO<span>.</span>
            <span className="nav-brand-sub">
              AI & ROBOTICS
            </span>
          </span>
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.id}
              className={`nav-link ${active === link.id ? "active" : ""}`}
              onClick={() => navigate(link.id)}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <a className="nav-contact" href="#contact">
          LET'S TALK
          <ArrowUpRight size={15} />
        </a>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <button
                key={link.id}
                className={`nav-mobile-link ${active === link.id ? "active" : ""}`}
                onClick={() => navigate(link.id)}
              >
                {link.name}
                <ArrowUpRight size={15} />
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
