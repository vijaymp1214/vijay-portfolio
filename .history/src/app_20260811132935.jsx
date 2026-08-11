import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <span>&lt;</span> Vijay <span>/&gt;</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-small">
            <span></span> JAVA DEVELOPER
          </p>

          <h1>
            Building clean &
            <br />
            <span>scalable applications.</span>
          </h1>

          <p className="hero-description">
            I'm a passionate Java Developer focused on building backend
            applications using Java, Spring Boot, REST APIs and MySQL.
            I also have experience with React and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank">GitHub ↗</a>
            <a href="https://linkedin.com/" target="_blank">LinkedIn ↗</a>
          </div>

        </div>

        <div className="hero-card">

          <div className="code-window">

            <div className="window-top">
              <div className="dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>Developer.java</span>
            </div>

            <div className="code">
              <p><span className="purple">public class</span> <span className="blue">Developer</span> {"{"}</p>

              <p className="indent">
                <span className="purple">String</span> role =
                <span className="green"> "Java Developer"</span>;
              </p>

              <p className="indent">
                <span className="purple">String</span> focus =
                <span className="green"> "Backend Development"</span>;
              </p>

              <p className="indent">
                <span className="purple">String</span> stack =
                <span className="green"> "Spring Boot"</span>;
              </p>

              <p className="indent">
                <span className="purple">boolean</span> learning =
                <span className="orange"> true</span>;
              </p>

              <p>{"}"}</p>

              <div className="code-cursor"></div>
            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="section">

        <div className="section-title">
          <p>01 — ABOUT ME</p>
          <h2>Turning ideas into <span>working software.</span></h2>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I'm a motivated Software Developer and 2025 graduate with a
              strong foundation in Java and backend development.
            </p>

            <p>
              I enjoy creating REST APIs, working with databases and
              developing real-world applications using Spring Boot.
            </p>

            <p>
              Currently, I'm focused on improving my development skills
              and preparing myself for a professional Java Developer role.
            </p>
          </div>

          <div className="about-stats">

            <div className="stat-card">
              <h3>2025</h3>
              <p>Graduate</p>
            </div>

            <div className="stat-card">
              <h3>Java</h3>
              <p>Primary Language</p>
            </div>

            <div className="stat-card">
              <h3>Spring</h3>
              <p>Backend Framework</p>
            </div>

            <div className="stat-card">
              <h3>REST</h3>
              <p>API Development</p>
            </div>

          </div>

        </div>

      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">

        <div className="section-title">
          <p>02 — SKILLS</p>
          <h2>My <span>technical toolkit.</span></h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">☕</div>
            <h3>Java</h3>
            <p>
              Core Java, OOP, Collections, Exception Handling and Java 8.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">◆</div>
            <h3>Spring Boot</h3>
            <p>
              REST APIs, Spring MVC, JPA, Hibernate, Validation and Security basics.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">▣</div>
            <h3>Database</h3>
            <p>
              MySQL and SQL Server with SQL queries, joins and database operations.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">{"</>"}</div>
            <h3>Frontend</h3>
            <p>
              HTML, CSS, JavaScript, React and Bootstrap for responsive interfaces.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙</div>
            <h3>Tools</h3>
            <p>
              Git, GitHub, Postman, Maven, IntelliJ IDEA and Visual Studio.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">API</div>
            <h3>Backend</h3>
            <p>
              RESTful API development, CRUD operations and API testing.
            </p>
          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="section">

        <div className="section-title">
          <p>03 — PROJECTS</p>
          <h2>Things I've <span>built.</span></h2>
        </div>

        <div className="projects-grid">

          <div className="project-card featured">

            <div className="project-number">01</div>

            <div className="project-content">

              <span className="project-type">
                BACKEND APPLICATION
              </span>

              <h3>IncidentHub</h3>

              <p>
                Enterprise-style incident management system designed to
                create, track and manage incidents efficiently.
              </p>

              <div className="tech-stack">
                <span>ASP.NET Core</span>
                <span>EF Core</span>
                <span>SQL Server</span>
                <span>React</span>
              </div>

              <a href="#" className="project-link">
                View Project ↗
              </a>

            </div>

          </div>

          <div className="project-card">

            <div className="project-number">02</div>

            <div className="project-content">

              <span className="project-type">
                JAVA APPLICATION
              </span>

              <h3>Mobile Store Management</h3>

              <p>
                REST API based application for managing mobile products,
                including CRUD operations, search and validation.
              </p>

              <div className="tech-stack">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>JPA</span>
                <span>MySQL</span>
              </div>

              <a href="#" className="project-link">
                View Project ↗
              </a>

            </div>

          </div>

          <div className="project-card">

            <div className="project-number">03</div>

            <div className="project-content">

              <span className="project-type">
                FRONTEND PROJECT
              </span>

              <h3>Real Estate Broker</h3>

              <p>
                Responsive real estate website interface built with a clean
                layout and modern responsive design.
              </p>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
              </div>

              <a href="#" className="project-link">
                View Project ↗
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">

        <div className="contact-box">

          <p className="contact-small">
            04 — CONTACT
          </p>

          <h2>
            Let's build something
            <br />
            <span>great together.</span>
          </h2>

          <p>
            I'm currently looking for opportunities as a Java Developer.
            If you have a suitable opportunity, feel free to reach out.
          </p>

          <a
            href="mailto:your-email@gmail.com"
            className="primary-btn"
          >
            Get In Touch ↗
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer>

        <div className="logo">
          <span>&lt;</span> Vijay <span>/&gt;</span>
        </div>

        <p>
          © 2026 Vijay Prajapati. Built with React.
        </p>

        <div className="footer-links">
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
        </div>

      </footer>

    </div>
  );
}

export default App;