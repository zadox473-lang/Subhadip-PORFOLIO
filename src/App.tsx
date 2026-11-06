function App() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #080707;
          color: #ffffff;
          font-family: Arial, sans-serif;
        }

        .portfolio {
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 80% 55%, #48140055, transparent 45%),
            radial-gradient(ellipse at 10% 90%, #a52a0b22, transparent 40%),
            #080707;
        }

        .navbar {
          min-height: 85px;
          padding: 0 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #ffffff15;
        }

        .brand {
          font-size: 23px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .brand span {
          color: #ff5722;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          color: #aaaaaa;
          text-decoration: none;
          font-size: 13px;
        }

        .nav-links a:hover {
          color: #ff5722;
        }

        .hero {
          min-height: calc(100vh - 85px);
          padding: 70px 10%;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 2;
          animation: reveal 1s ease both;
        }

        .eyebrow {
          color: #ff7043;
          letter-spacing: 5px;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 25px;
        }

        .hero h1 {
          font-size: clamp(55px, 10vw, 115px);
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -5px;
        }

        .hero h1 span {
          color: #ff5722;
          text-shadow: 0 0 45px #ff3d1644;
        }

        .hero h2 {
          color: #cccccc;
          font-size: clamp(18px, 3vw, 27px);
          font-weight: 400;
          margin-top: 30px;
        }

        .description {
          color: #999999;
          max-width: 480px;
          line-height: 1.8;
          margin-top: 18px;
          font-size: 15px;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-top: 35px;
          flex-wrap: wrap;
        }

        .hero-buttons a {
          padding: 15px 25px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 13px;
          font-weight: bold;
          transition: 0.3s;
        }

        .primary {
          background: #ff5722;
          color: #ffffff;
          box-shadow: 0 0 30px #ff572233;
        }

        .secondary {
          border: 1px solid #ffffff44;
          color: #ffffff;
        }

        .hero-buttons a:hover {
          transform: translateY(-4px);
        }

        .glow {
          position: absolute;
          width: 350px;
          height: 350px;
          right: 8%;
          top: 25%;
          border-radius: 50%;
          background: #ff4500;
          filter: blur(150px);
          opacity: 0.18;
          animation: pulse 4s infinite alternate;
        }

        .scroll {
          position: absolute;
          bottom: 30px;
          left: 10%;
          color: #777777;
          font-size: 10px;
          letter-spacing: 4px;
        }

        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          from {
            opacity: 0.1;
          }
          to {
            opacity: 0.28;
          }
        }

        @media (max-width: 650px) {
          .navbar {
            padding: 0 6%;
            min-height: 70px;
          }

          .nav-links {
            gap: 12px;
          }

          .nav-links a {
            font-size: 10px;
          }

          .hero {
            padding: 60px 7%;
            min-height: calc(100vh - 70px);
          }

          .hero h1 {
            letter-spacing: -3px;
          }

          .glow {
            right: -30%;
          }
        }
      `}</style>

      <main className="portfolio">
        <nav className="navbar">
          <div className="brand">
            SUBHO<span>.</span>
          </div>

          <div className="nav-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>

        <section className="hero" id="home">
          <div className="glow"></div>

          <div className="hero-content">
            <p className="eyebrow">AI &amp; ROBOTICS STUDENT</p>

            <h1>
              BUILDING
              <br />
              THE <span>FUTURE.</span>
            </h1>

            <h2>I&apos;m Subhadip — Future Engineer.</h2>

            <p className="description">
              Exploring Artificial Intelligence, Robotics and
              technology to turn ambitious ideas into reality.
              This is my journey of learning, building and creating.
            </p>

            <div className="hero-buttons">
              <a className="primary" href="#about">
                EXPLORE MY WORLD
              </a>

              <a className="secondary" href="#contact">
                CONTACT ME
              </a>
            </div>
          </div>

          <div className="scroll">SCROLL TO EXPLORE</div>
        </section>

        <section
          id="about"
          style={{ padding: "100px 10%", color: "#aaaaaa" }}
        >
          <p style={{ color: "#ff5722", letterSpacing: 4 }}>
            01 / ABOUT
          </p>

          <h2 style={{ color: "#ffffff", fontSize: 38, marginTop: 20 }}>
            The journey starts here.
          </h2>

          <p style={{ marginTop: 15 }}>
            More about Subhadip coming soon.
          </p>
        </section>

        <section
          id="contact"
          style={{ padding: "70px 10%", color: "#aaaaaa" }}
        >
          <p style={{ color: "#ff5722", letterSpacing: 4 }}>
            02 / CONTACT
          </p>

          <h2 style={{ color: "#ffffff", fontSize: 38, marginTop: 20 }}>
            Let&apos;s connect.
          </h2>
        </section>
      </main>
    </>
  );
}

export default App;
