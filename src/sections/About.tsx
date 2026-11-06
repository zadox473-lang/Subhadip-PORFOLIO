function About() {
  return (
    <>
      <style>{`
        .about-section {
          position: relative;
          padding: 120px 10%;
          overflow: hidden;
          background: #080707;
          color: #fff;
        }

        .about-section::before {
          content: "";
          position: absolute;
          width: 320px;
          height: 320px;
          left: -180px;
          top: 20%;
          background: #ff4b16;
          filter: blur(150px);
          opacity: .16;
          pointer-events: none;
        }

        .about-inner {
          max-width: 1200px;
          margin: auto;
          position: relative;
          z-index: 1;
        }

        .about-label {
          color: #ff7043;
          font-size: 12px;
          letter-spacing: 5px;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .about-heading {
          font-size: clamp(38px, 6vw, 70px);
          line-height: 1.05;
          letter-spacing: -3px;
          max-width: 750px;
        }

        .about-heading span {
          color: #ff5722;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 35px;
          margin-top: 55px;
          align-items: stretch;
        }

        .about-card {
          padding: 38px;
          border: 1px solid #ffffff18;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            #ffffff0c,
            #ffffff03
          );
          backdrop-filter: blur(15px);
          transition: transform .35s, border-color .35s;
        }

        .about-card:hover {
          transform: translateY(-7px);
          border-color: #ff572266;
        }

        .about-card h3 {
          font-size: 25px;
          margin-bottom: 20px;
        }

        .about-card p {
          color: #a7a2a0;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 15px;
        }

        .about-highlight {
          color: #ff7043;
          font-weight: 700;
        }

        .about-side {
          display: grid;
          gap: 18px;
        }

        .about-stat {
          padding: 25px 28px;
          border: 1px solid #ffffff18;
          border-radius: 15px;
          background: #ffffff08;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          transition: .3s;
        }

        .about-stat:hover {
          border-color: #ff572277;
          background: #ff57220b;
        }

        .about-stat strong {
          color: #ff5722;
          font-size: 30px;
        }

        .about-stat span {
          color: #aaa;
          font-size: 13px;
          text-align: right;
        }

        .about-bottom {
          margin-top: 35px;
          padding: 28px 32px;
          border-left: 3px solid #ff5722;
          background: linear-gradient(90deg, #ff572214, transparent);
          color: #c4bfbc;
          line-height: 1.8;
          font-size: 15px;
        }

        @media (max-width: 750px) {
          .about-section {
            padding: 85px 7%;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 35px;
          }

          .about-card {
            padding: 27px;
          }

          .about-heading {
            letter-spacing: -2px;
          }

          .about-stat {
            padding: 22px;
          }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-inner">
          <p className="about-label">01 / ABOUT ME</p>

          <h2 className="about-heading">
            CURIOUS MIND.
            <br />
            <span>FUTURE BUILDER.</span>
          </h2>

          <div className="about-grid">
            <div className="about-card">
              <h3>Beyond the ordinary.</h3>

              <p>
                I'm Subhadip, an aspiring engineer exploring
                the exciting world of Artificial Intelligence
                and Robotics.
              </p>

              <p>
                I believe technology is more than just code.
                It's about solving real problems, experimenting
                with ideas and building things that make a difference.
              </p>

              <p>
                Currently learning, experimenting and growing
                one project at a time.
              </p>

              <p className="about-highlight">
                THINK. BUILD. EXPLORE. REPEAT.
              </p>
            </div>

            <div className="about-side">
              <div className="about-stat">
                <strong>AI</strong>
                <span>Artificial Intelligence</span>
              </div>

              <div className="about-stat">
                <strong>01</strong>
                <span>Year of Engineering</span>
              </div>

              <div className="about-stat">
                <strong>RBT</strong>
                <span>Robotics & Technology</span>
              </div>
            </div>
          </div>

          <div className="about-bottom">
            "The goal is not just to learn technology.
            The goal is to use it to create something meaningful."
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
