import React, { useState } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Monitor,
  GitBranch,
  Send,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "IncidentHub",
    category: "INCIDENT MANAGEMENT SYSTEM",
    description:
      "A web-based incident management system for creating, tracking and managing technical incidents through a structured backend API.",
    tech: ["ASP.NET Core", "EF Core", "SQL Server", "REST API", "React"],
  },
  {
    number: "02",
    title: "Mobile Store Management System",
    category: "JAVA BACKEND PROJECT",
    description:
      "A Spring Boot REST API application for managing mobile products with CRUD operations, validation and database integration.",
    tech: ["Java", "Spring Boot", "JPA", "Hibernate", "MySQL"],
  },
  {
    number: "03",
    title: "Library Management System",
    category: "JAVA BACKEND PROJECT",
    description:
      "A backend application for managing library data using Java, Spring Boot, JPA, Hibernate and MySQL.",
    tech: ["Java", "Spring Boot", "JPA", "MySQL"],
  },
  {
    number: "04",
    title: "YouTube Clone",
    category: "FRONTEND PROJECT",
    description:
      "A responsive YouTube-inspired frontend interface created to practice HTML, CSS, layout and responsive design.",
    tech: ["HTML", "CSS"],
  },
  {
    number: "05",
    title: "Real Estate Broker",
    category: "FRONTEND PROJECT",
    description:
      "A clean property browsing interface created with frontend technologies and responsive layouts.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const skillGroups = [
  {
    icon: <Code2 />,
    title: "Programming",
    skills: ["Java", "C#", "JavaScript", "OOP", "Collections", "Exception Handling"],
  },
  {
    icon: <Server />,
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "REST APIs",
      "Hibernate",
      "JPA",
      "ASP.NET Core",
    ],
  },
  {
    icon: <Database />,
    title: "Database",
    skills: ["MySQL", "SQL Server", "SQL"],
  },
  {
    icon: <Monitor />,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
  },
  {
    icon: <GitBranch />,
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Maven", "Visual Studio", "IntelliJ IDEA"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            VP<span>.</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <a
              href="/Vijay-Prajapati-Resume.pdf"
              className="resume-btn"
              download
            >
              Resume <Download size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero container" id="home">
          <div className="hero-left">
            <div className="availability">
              <span></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="hero-small">HELLO, I'M</p>

            <h1>
              Vijay
              <br />
              <span>Prajapati.</span>
            </h1>

            <h2>Java Backend Developer</h2>

            <p className="hero-description">
              Motivated software developer with a strong foundation in
              Java, Spring Boot, REST APIs, Hibernate/JPA and MySQL.
              I enjoy building practical backend applications and solving
              real-world problems through clean and maintainable code.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View Projects <ArrowUpRight size={18} />
              </a>

              <a
                href="/Vijay-Prajapati-Resume.pdf"
                className="secondary-btn"
                download
              >
                Download Resume <Download size={17} />
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Github size={19} /> GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} /> LinkedIn
              </a>

              <a href="mailto:vijay12p14@gmail.com">
                <Mail size={19} /> Email
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="window-title">
                  developer.java
                </div>
              </div>

              <div className="code-content">
                <div>
                  <span className="line">01</span>
                  <span>
                    <b>public class</b> Developer {"{"}
                  </span>
                </div>

                <div>
                  <span className="line">02</span>
                  <span>
                    &nbsp;&nbsp;String name ={" "}
                    <mark>"Vijay"</mark>;
                  </span>
                </div>

                <div>
                  <span className="line">03</span>
                  <span>
                    &nbsp;&nbsp;String role ={" "}
                    <mark>"Java Developer"</mark>;
                  </span>
                </div>

                <div>
                  <span className="line">04</span>
                  <span>
                    &nbsp;&nbsp;String[] skills = {"{"}
                  </span>
                </div>

                <div>
                  <span className="line">05</span>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<mark>"Java"</mark>,
                  </span>
                </div>

                <div>
                  <span className="line">06</span>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<mark>"Spring Boot"</mark>,
                  </span>
                </div>

                <div>
                  <span className="line">07</span>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<mark>"REST API"</mark>
                  </span>
                </div>

                <div>
                  <span className="line">08</span>
                  <span>&nbsp;&nbsp;{"}"};</span>
                </div>

                <div>
                  <span className="line">09</span>
                  <span>{"}"}</span>
                </div>
              </div>

              <div className="terminal-status">
                <span></span>
                READY TO BUILD
              </div>
            </div>

            <div className="floating-card java">Java</div>
            <div className="floating-card spring">Spring Boot</div>
            <div className="floating-card sql">MySQL</div>
          </div>
        </section>

        {/* TECH TICKER */}
        <div className="tech-bar">
          <div>
            JAVA <span>✦</span>
            SPRING BOOT <span>✦</span>
            REST API <span>✦</span>
            HIBERNATE <span>✦</span>
            MYSQL <span>✦</span>
            SQL <span>✦</span>
            REACT <span>✦</span>
            ASP.NET CORE <span>✦</span>
          </div>
        </div>

        {/* ABOUT */}
        <section className="section container" id="about">
          <div className="section-label">
            <span>01 /</span> ABOUT ME
          </div>

          <div className="about-grid">
            <div>
              <h2>
                Building with purpose.
                <br />
                <span>Learning with every project.</span>
              </h2>
            </div>

            <div className="about-text">
              <p>
                I am a motivated software developer and 2025 graduate
                focused on Java backend development.
              </p>

              <p>
                I have hands-on experience building applications using
                Java, Spring Boot, REST APIs, JPA/Hibernate and MySQL.
                I am continuously improving my backend development and
                problem-solving skills while preparing for professional
                software development opportunities.
              </p>

              <p>
                My goal is to join a development team where I can contribute
                to real-world applications while continuing to grow as a
                software developer.
              </p>
            </div>
          </div>

          <div className="stats">
            <div>
              <strong>2025</strong>
              <span>Graduate</span>
            </div>

            <div>
              <strong>Java</strong>
              <span>Backend Focus</span>
            </div>

            <div>
              <strong>Spring Boot</strong>
              <span>REST APIs</span>
            </div>

            <div>
              <strong>5+</strong>
              <span>Projects</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section dark-section" id="skills">
          <div className="container">
            <div className="section-label light">
              <span>02 /</span> TECHNICAL SKILLS
            </div>

            <div className="section-heading">
              <h2>
                My technical
                <br />
                <span>toolkit.</span>
              </h2>

              <p>
                Technologies and tools I use to build applications,
                APIs and database-driven systems.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-card" key={group.title}>
                  <div className="skill-icon">{group.icon}</div>

                  <h3>{group.title}</h3>

                  <div className="skill-chips">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section container" id="projects">
          <div className="section-label">
            <span>03 /</span> FEATURED PROJECTS
          </div>

          <div className="section-heading project-heading">
            <h2>
              Work that
              <br />
              <span>speaks for itself.</span>
            </h2>

            <p>
              Hands-on projects built to strengthen my backend,
              database and frontend development skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <ArrowUpRight size={21} />
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    GitHub <Github size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education-section" id="education">
          <div className="container">
            <div className="section-label">
              <span>04 /</span> EDUCATION
            </div>

            <div className="education-content">
              <div>
                <h2>
                  Academic
                  <br />
                  <span>foundation.</span>
                </h2>
              </div>

              <div className="education-card">
                <div className="education-year">2025</div>

                <div>
                  <h3>Bachelor's Degree</h3>
                  <p>
                    Graduate — 2025
                  </p>

                  <div className="education-line"></div>

                  <p className="education-note">
                    Focused on software development, programming,
                    databases and application development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <p>LOOKING FOR AN OPPORTUNITY</p>

            <h2>
              Let's build something
              <br />
              <span>useful together.</span>
            </h2>

            <a href="#contact" className="primary-btn">
              Get In Touch <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <div className="section-label light">
                <span>05 /</span> CONTACT
              </div>

              <h2>
                Let's talk about
                <br />
                <span>opportunities.</span>
              </h2>

              <p>
                I'm currently looking for entry-level opportunities as a
                Java Developer / Java Backend Developer.
              </p>

              <div className="contact-links">
                <a href="mailto:vijay12p14@gmail.com">
                  <Mail size={19} />
                  vijay12p14@gmail.com
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={19} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={19} />
                  GitHub
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message is ready to send.");
              }}
            >
              <label>
                Your Name
                <input type="text" placeholder="Your name" required />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  rows="5"
                  placeholder="Tell me about the opportunity..."
                  required
                ></textarea>
              </label>

              <button type="submit" className="primary-btn">
                Send Message <Send size={17} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Vijay Prajapati / Java Backend Developer</span>
          <strong>VP.</strong>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

export default App;