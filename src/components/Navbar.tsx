import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "University", href: "#university" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .portfolio-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          box-sizing: border-box;
          padding: 22px 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: 0.35s ease;
          border-bottom: 1px solid transparent;
        }

        .portfolio-navbar.scrolled {
          padding-top: 14px;
          padding-bottom: 14px;
          background: rgba(8,8,8,0.88);
          backdrop-filter: blur(18px);
          border-bottom-color: rgba(255,255,255,0.08);
        }

        .navbar-logo {
          color: white;
          text-decoration: none;
          font-size: 25px;
          font-weight: 950;
          letter-spacing: -1px;
          flex-shrink: 0;
        }

        .navbar-logo span {
          color: #ff642e;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .navbar-links a {
          color: #aaa;
          text-decoration: none;
          font-size: 12px;
          font-weight: 600;
          transition: color 0.25s;
          white-space: nowrap;
        }

        .navbar-links a:hover {
          color: #ff713d;
        }

        .navbar-contact {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 11px 16px;
          color: white !important;
          border: 1px solid rgba(255,100,46,0.55);
          border-radius: 9px;
          background: rgba(255,100,46,0.10);
        }

        .navbar-contact:hover {
          background: rgba(255,100,46,0.22);
        }

        .navbar-menu-button {
          display: none;
          color: white;
          background: transparent;
          border: 0;
          cursor: pointer;
          padding: 8px;
        }

        .mobile-navbar {
          position: fixed;
          top: 70px;
          left: 5%;
          width: 90%;
          z-index: 999;
          padding: 18px;
          box-sizing: border-box;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          background: rgba(12,12,12,0.97);
          backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .mobile-navbar a {
          color: #ddd;
          text-decoration: none;
          padding: 13px 12px;
          border-radius: 8px;
          font-size: 14px;
          transition: 0.2s;
        }

        .mobile-navbar a:hover {
          color: #ff713d;
          background: rgba(255,100,46,0.08);
        }

        @media (max-width: 1050px) {
          .navbar-links {
            gap: 15px;
          }

          .navbar-links a {
            font-size: 11px;
          }
        }

        @media (max-width: 850px) {
          .portfolio-navbar {
            padding: 17px 6%;
          }

          .navbar-links {
            display: none;
          }

          .navbar-menu-button {
            display: block;
          }
        }
      `}</style>

      <header
        className={`portfolio-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <a className="navbar-logo" href="#home" onClick={closeMenu}>
          SUBHO<span>.</span>
        </a>

        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}

          <a className="navbar-contact" href="#contact">
            Let's Talk <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className="navbar-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-navbar"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
