import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  GitHub,
  LinkedIn,
  Instagram,
  MessageCircle,
  Sparkles,
} from 'lucide-react'

const contacts = [
  {
    name: 'Email',
    detail: 'Let’s talk ideas',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    icon: Mail,
  },
  {
    name: 'GitHub',
    detail: 'Explore my code',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    detail: 'Connect professionally',
    value: 'linkedin.com/in/yourusername',
    href: 'https://www.linkedin.com/in/yourusername',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    detail: 'Follow my journey',
    value: '@yourusername',
    href: 'https://www.instagram.com/yourusername',
    icon: Instagram,
  },
  {
    name: 'WhatsApp',
    detail: 'Let’s connect directly',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/91XXXXXXXXXX',
    icon: MessageCircle,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />
      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact-eyebrow">
            <Sparkles size={15} /> THE NEXT CONNECTION
          </span>

          <h2>
            LET'S BUILD
            <br />
            <span>SOMETHING REAL.</span>
          </h2>

          <p>
            Have an idea, a project, or just want to connect?
            My inbox is always open for interesting conversations.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            className="contact-message"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="contact-small-label">HAVE A PROJECT IN MIND?</span>

            <h3>
              Let's turn
              <br />
              ideas into <span>reality.</span>
            </h3>

            <p>
              I'm always excited to explore new technologies,
              collaborate on creative ideas and learn something new.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="contact-main-button"
            >
              SAY HELLO <ArrowUpRight size={19} />
            </a>
          </motion.div>

          <div className="contact-links">
            {contacts.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ x: 7 }}
                >
                  <div className="contact-icon">
                    <Icon size={21} />
                  </div>

                  <div className="contact-card-text">
                    <h4>{item.name}</h4>
                    <p>{item.detail}</p>
                    <span>{item.value}</span>
                  </div>

                  <ArrowUpRight
                    className="contact-arrow"
                    size={19}
                  />
                </motion.a>
              )
            })}
          </div>
        </div>

        <footer className="contact-footer">
          <a href="#home" className="footer-logo">
            SUBHO<span>.</span>
          </a>

          <p>DESIGNED TO EXPLORE. BUILT TO CREATE.</p>

          <span>© {new Date().getFullYear()} SUBHADIP. ALL RIGHTS RESERVED.</span>
        </footer>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          overflow: hidden;
          background: #080808;
          color: #f5f5f5;
          padding: 130px 7% 30px;
          font-family: inherit;
        }

        .contact-glow {
          position: absolute;
          width: 550px;
          height: 550px;
          right: -250px;
          top: 100px;
          background: rgba(255, 75, 15, 0.10);
          filter: blur(120px);
          border-radius: 50%;
          pointer-events: none;
        }

        .contact-container {
          position: relative;
          z-index: 1;
          max-width: 1250px;
          margin: auto;
        }

        .contact-eyebrow,
        .contact-small-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #ff7138;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .contact-heading h2 {
          font-size: clamp(48px, 8vw, 105px);
          line-height: 0.98;
          letter-spacing: -5px;
          margin: 25px 0;
          font-weight: 900;
        }

        .contact-heading h2 span,
        .contact-message h3 span {
          color: #ff6330;
          text-shadow: 0 0 35px rgba(255, 75, 20, 0.2);
        }

        .contact-heading > p {
          color: #929292;
          max-width: 480px;
          line-height: 1.8;
          font-size: 15px;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          margin-top: 85px;
          align-items: start;
        }

        .contact-message {
          padding: 35px 0;
        }

        .contact-message h3 {
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.05;
          letter-spacing: -2px;
          margin: 25px 0;
        }

        .contact-message > p {
          color: #929292;
          line-height: 1.9;
          max-width: 390px;
          font-size: 14px;
        }

        .contact-main-button {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          margin-top: 30px;
          padding: 17px 25px;
          background: #ff6330;
          color: #080808;
          text-decoration: none;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1px;
          border-radius: 4px;
          transition: 0.3s ease;
        }

        .contact-main-button:hover {
          background: #ff8a53;
          transform: translateY(-4px);
          box-shadow: 0 10px 35px rgba(255, 85, 30, 0.2);
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.025);
          border-radius: 9px;
          color: white;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .contact-card:hover {
          border-color: rgba(255, 99, 48, 0.55);
          background: rgba(255, 90, 35, 0.055);
          box-shadow: 0 8px 30px rgba(255, 75, 20, 0.07);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          color: #ff7138;
          background: rgba(255, 99, 48, 0.1);
          border-radius: 7px;
        }

        .contact-card-text {
          flex: 1;
          min-width: 0;
        }

        .contact-card-text h4 {
          margin: 0 0 5px;
          font-size: 15px;
        }

        .contact-card-text p {
          margin: 0 0 5px;
          color: #888;
          font-size: 12px;
        }

        .contact-card-text span {
          color: #ff8759;
          font-size: 11px;
          overflow-wrap: anywhere;
        }

        .contact-arrow {
          color: #777;
          flex-shrink: 0;
        }

        .contact-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 120px;
          padding: 30px 0 15px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .footer-logo {
          color: white;
          font-size: 24px;
          font-weight: 900;
          text-decoration: none;
          letter-spacing: -1px;
        }

        .footer-logo span {
          color: #ff6330;
        }

        .contact-footer p,
        .contact-footer > span {
          color: #777;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        @media (max-width: 800px) {
          .contact-section {
            padding: 90px 6% 25px;
          }

          .contact-heading h2 {
            letter-spacing: -2px;
          }

          .contact-layout {
            grid-template-columns: 1fr;
            gap: 35px;
            margin-top: 55px;
          }

          .contact-message {
            padding: 10px 0;
          }

          .contact-footer {
            margin-top: 75px;
          }
        }

        @media (max-width: 500px) {
          .contact-card {
            padding: 15px 12px;
            gap: 12px;
          }

          .contact-icon {
            width: 42px;
            height: 42px;
          }

          .contact-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  )
}
