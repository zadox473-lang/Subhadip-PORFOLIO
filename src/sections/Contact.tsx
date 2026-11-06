
import { motion } from "framer-motion";
import {
  Mail,
  GitHub,
  LinkedIn,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    detail: "Explore my code",
    icon: GitHub,
    url: "https://github.com/",
  },
  {
    name: "LinkedIn",
    detail: "Connect professionally",
    icon: LinkedIn,
    url: "https://www.linkedin.com/",
  },
  {
    name: "Instagram",
    detail: "Follow my journey",
    icon: Instagram,
    url: "https://www.instagram.com/",
  },
  {
    name: "WhatsApp",
    detail: "Let's have a chat",
    icon: MessageCircle,
    url: "https://wa.me/",
  },
];

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <style>{`
        .contact-section {
          position: relative;
          padding: 110px 7% 90px;
          overflow: hidden;
          background: #080808;
          color: white;
        }

        .contact-section::before {
          content: "";
          position: absolute;
          width: 480px;
          height: 480px;
          left: -220px;
          top: 10%;
          background: rgba(255, 75, 20, 0.10);
          filter: blur(120px);
          pointer-events: none;
        }

        .contact-heading {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 55px;
          position: relative;
          z-index: 1;
        }

        .contact-eyebrow {
          color: #ff713d;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 4px;
        }

        .contact-heading h2 {
          font-size: clamp(40px, 7vw, 76px);
          line-height: 1.05;
          font-weight: 900;
          margin: 20px 0;
        }

        .contact-heading h2 span {
          color: #ff642e;
        }

        .contact-heading p {
          color: #999;
          line-height: 1.8;
          font-size: 15px;
        }

        .contact-card {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: auto;
          padding: 45px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.1);
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.07),
            rgba(255,255,255,0.015)
          );
          backdrop-filter: blur(16px);
        }

        .contact-card h3 {
          font-size: 25px;
          margin: 0 0 10px;
        }

        .contact-card > p {
          color: #999;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .contact-email {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
          padding: 15px 20px;
          border-radius: 12px;
          background: rgba(255,100,46,0.12);
          border: 1px solid rgba(255,100,46,0.35);
          transition: 0.3s;
          overflow-wrap: anywhere;
        }

        .contact-email:hover {
          background: rgba(255,100,46,0.22);
          border-color: #ff713d;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-top: 35px;
        }

        .social-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 20px;
          min-width: 0;
          color: white;
          text-decoration: none;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.025);
          transition: 0.3s;
        }

        .social-card:hover {
          border-color: rgba(255,100,46,0.6);
          background: rgba(255,100,46,0.08);
          transform: translateY(-5px);
        }

        .social-card svg {
          color: #ff713d;
        }

        .social-card strong {
          font-size: 14px;
        }

        .social-card span {
          color: #888;
          font-size: 11px;
        }

        .contact-footer {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 75px auto 0;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: #777;
          font-size: 12px;
        }

        .contact-footer strong {
          color: #ff713d;
          letter-spacing: 2px;
        }

        @media (max-width: 750px) {
          .social-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .contact-card {
            padding: 28px;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 80px 6% 50px;
          }

          .contact-footer {
            flex-direction: column;
            align-items: flex-start;
          }

          .contact-email {
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>

      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="contact-eyebrow">LET'S CONNECT</span>

        <h2>
          HAVE A <span>PROJECT?</span>
        </h2>

        <p>
          Have an idea, opportunity or just want to talk about
          technology? Feel free to reach out.
        </p>
      </motion.div>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3>Let's build something meaningful.</h3>

        <p>
          I'm always interested in learning, collaborating and
          exploring new ideas in AI and Robotics.
        </p>

        <a
          className="contact-email"
          href="mailto:your-email@example.com"
        >
          <Mail size={19} />
          your-email@example.com
          <ArrowUpRight size={17} />
        </a>

        <div className="social-grid">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <motion.a
                className="social-card"
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5 }}
              >
                <Icon size={23} />
                <strong>{social.name}</strong>
                <span>{social.detail}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <div className="contact-footer">
        <strong>SUBHO.</strong>
        <span>Designed with curiosity. Built for the future.</span>
        <span>© {new Date().getFullYear()} Subhadip</span>
      </div>
    </section>
  );
}

export default Contact;
