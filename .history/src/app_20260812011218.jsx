import React, { useState } from "react";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Code2,
  Database,
  Server,
  Layers,
  ExternalLink,
  Send,
  CheckCircle2,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "JAVA FULL STACK",
    title: "Job Portal Management System",
    description:
      "A full-stack recruitment platform where recruiters can post jobs and candidates can browse, apply and manage their applications.",
    tech: ["Java", "Spring Boot", "Spring Security", "React.js", "MySQL", "JWT"],
    github: "https://github.com/vijaymp1214/Job-Portal-Management-System",
  },
  {
    number: "02",
    category: "JAVA FULL STACK",
    title: "Marksheet Generator",
    description:
      "Academic management application for maintaining student records, entering marks, generating marksheets and managing authenticated users.",
    tech: ["Java", "Spring Boot", "React.js", "MongoDB", "JWT"],
    github: "https://github.com/vijaymp1214/Marksheet-Generator",
  },
  {
    number: "03",
    category: "FRONTEND",
    title: "Movie Ticket Booking Website",
    description:
      "Responsive movie booking interface featuring movie discovery, show selection, interactive seat selection and dynamic UI states.",
    tech: ["React", "TypeScript",  "Tailwind CSS"],
    github: "https://github.com/vijaymp1214/movie-ticket-booking-website",
  },
  {
    number: "04",
    category: "FRONTEND",
    title: "Online Real Estate Broker",
    description:
      "Property browsing interface designed for users to explore listings, compare property details and submit inquiries.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/",
  },
  {
    number: "05",
    category: ".NET FULL STACK",
    title: "eshoponWeb",
    description:
      "E-commerce application built using ASP.NET Core MVC with product management, cart, orders and checkout workflows.",
    tech: ["C#", "ASP.NET Core", "EF Core", "SQL Server"],
    github: "https://github.com/",
  },
];

const skillGroups = [
  {
    icon: <Code2 />,
    title: "Programming",
    skills: [
      "Java",
      "C#",
      "OOP",
      "Collections",
      "Exception Handling",
      "Multithreading",
    ],
  },
  {
    icon: <Server />,
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST APIs",
      "Hibernate",
      "JPA",
      "ASP.NET Core",
      "Entity Framework Core",
    ],
  },
  {
    icon: <Layers />,
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
    ],
  },
  {
    icon: <Database />,
    title: "Database",
    skills: ["MySQL", "MongoDB", "SQL", "SQL Server"],
  },
  {
    icon: <Code2 />,
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "NetBeans",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
      e.target.reset();
    }, 2500);
  };

  return (
    <>
      <div className="background-grid"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span>VP</span>
            <div>
              <strong>Vijay Prajapati</strong>
              <small>SOFTWARE DEVELOPER</small>
            </div>
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a href="#contact" className="nav-button" onClick={closeMenu}>
              Let's Talk <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero section-container" id="home">
          <div className="hero-left">
            <div className="availability">
              <span></span>
              OPEN TO WORK
            </div>

            <p className="hero-location">
              <MapPin size={14} /> Dombivli, Maharashtra, India
            </p>

            <h1>
              Full Stack
              <br />
              <span>Developer.</span>
            </h1>

            <p className="hero-description">
              I build scalable web applications using{" "}
              <strong>Java, Spring Boot, React.js, MySQL</strong> and{" "}
              <strong>.NET</strong>. I enjoy solving real-world problems and
              turning ideas into reliable software.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects <ArrowUpRight size={17} />
              </a>

              <a href="#contact" className="secondary-button">
    Let's Connect <ArrowUpRight size={16} />
  </a>
            </div>

            <div className="hero-contact">
              <a href="mailto:vijay12p14@gmail.com">
                <Mail size={16} />
                vijay12p14@gmail.com
              </a>

              <a href="tel:+918097199485">
                <Phone size={16} />
                +91 80971 99485
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="developer-card">
              <div className="card-top">
                <div className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>vijay-developer.java</span>
              </div>

              <div className="code-content">
                <div>
                  <span className="line">01</span>
                  <span>
                    <b className="purple">public class</b>{" "}
                    <b className="green">Developer</b> {"{"}
                  </span>
                </div>

                <div>
                  <span className="line">02</span>
                  <span>
                    &nbsp;&nbsp;String name ={" "}
                    <b className="yellow">"Vijay"</b>;
                  </span>
                </div>

                <div>
                  <span className="line">03</span>
                  <span>
                    &nbsp;&nbsp;String role ={" "}
                    <b className="yellow">"Full Stack"</b>;
                  </span>
                </div>

                <div>
                  <span className="line">04</span>
                  <span>
                    &nbsp;&nbsp;String backend ={" "}
                    <b className="yellow">"Java + .NET"</b>;
                  </span>
                </div>

                <div>
                  <span className="line">05</span>
                  <span>
                    &nbsp;&nbsp;String frontend ={" "}
                    <b className="yellow">"React.js"</b>;
                  </span>
                </div>

                <div>
                  <span className="line">06</span>
                  <span>
                    &nbsp;&nbsp;boolean available ={" "}
                    <b className="green">true</b>;
                  </span>
                </div>

                <div>
                  <span className="line">07</span>
                  <span>{"}"}</span>
                </div>
              </div>

              <div className="ready">
                <span></span>
                READY TO BUILD
              </div>
            </div>

            <div className="floating-tech java">JAVA</div>
            <div className="floating-tech react">REACT</div>
            <div className="floating-tech dotnet">.NET</div>
          </div>
        </section>

        {/* QUICK STATS */}
        <section className="stats section-container">
          <div>
            <strong>05+</strong>
            <span>Projects Built</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

          <div>
            <strong>2025</strong>
            <span>Graduate</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Learning Mindset</span>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-container" id="about">
          <SectionTitle number="01" title="About Me" />

          <div className="about-grid">
            <div>
              <h2>
                Curious by nature.
                <br />
                <span>Precise by practice.</span>
              </h2>
            </div>

            <div className="about-text">
              <p>
                I'm <strong>Vijay Prajapati</strong>, a software developer
                focused on full-stack web development.
              </p>

              <p>
                I have hands-on experience building applications using Java,
                Spring Boot, REST APIs, React.js, SQL and MySQL. I've also been
                expanding my backend development skills with C#, ASP.NET Core,
                Entity Framework Core and SQL Server.
              </p>

              <p>
                My goal is simple: write clean code, understand the problem
                properly and build software that actually works.
              </p>
            </div>
          </div>

          <div className="principles">
            <Principle
              number="01"
              title="Problem Solver"
              text="I focus on understanding the requirement first and then choosing the right technical solution."
            />

            <Principle
              number="02"
              title="Full Stack Mindset"
              text="I enjoy working across frontend, backend, APIs and databases instead of limiting myself to one layer."
            />

            <Principle
              number="03"
              title="Always Learning"
              text="I continuously improve my skills by building projects and working with new technologies."
            />
          </div>
        </section>

        {/* SKILLS */}
        <section className="section section-container" id="skills">
          <SectionTitle number="02" title="Technical Skills" />

          <h2 className="section-heading">
            Technologies I <span>work with.</span>
          </h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <div className="skill-icon">{group.icon}</div>

                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section section-container" id="projects">
          <SectionTitle number="03" title="Projects" />

          <div className="project-heading">
            <h2>
              Proof,
              <br />
              <span>not promises.</span>
            </h2>

            <p>
              A selection of applications I've built while developing my
              full-stack engineering skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-category">{project.category}</div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project <ExternalLink size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section section-container" id="education">
          <SectionTitle number="04" title="Education" />

          <div className="education-heading">
            <h2>
              Foundations
              <br />
              <span>that shaped me.</span>
            </h2>
          </div>

          <div className="timeline">
            <Education
              year="2022 — 2025"
              degree="B.Sc. Information Technology"
              college="SIA College of Higher Education, Dombivli"
              number="01"
            />

            <Education
              year="2020 — 2022"
              degree="HSC · Commerce"
              college="E.B. Madhavi Jr. College, Dombivli"
              number="02"
            />

            <Education
              year="2019 — 2020"
              degree="SSC"
              college="B.R. Madhavi English School, Dombivli"
              number="03"
            />
          </div>

          <div className="certificate">
            <div>
              <small>CERTIFICATION</small>
              <h3>Java Full Stack Development</h3>
              <p>Develearn Institute · July 2026</p>
            </div>

            <CheckCircle2 />
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="section-container contact-grid">
            <div className="contact-left">
              <SectionTitle number="05" title="Contact" light />

              <h2>
                Let's build
                <br />
                <span>something useful.</span>
              </h2>

              <p>
                I'm currently open to entry-level software development
                opportunities. If you're hiring or would like to discuss a
                project, feel free to reach out.
              </p>

              <div className="social-links">
                <a href="mailto:vijay12p14@gmail.com">
                  <Mail size={17} /> Email
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} /> GitHub
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                NAME
                <input required type="text" placeholder="Your name" />
              </label>

              <label>
                EMAIL
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                />
              </label>

              <label>
                MESSAGE
                <textarea
                  required
                  rows="6"
                  placeholder="Tell me about the opportunity..."
                ></textarea>
              </label>

              <button type="submit" className="send-button">
                {sent ? "Message Ready ✓" : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-container footer-inner">
          <span>Vijay Prajapati · Software Developer</span>
          <strong>VP.</strong>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  );
}

function SectionTitle({ number, title, light = false }) {
  return (
    <div className={`section-title ${light ? "light-title" : ""}`}>
      <span>{number} /</span>
      <strong>{title}</strong>
      <i></i>
    </div>
  );
}

function Principle({ number, title, text }) {
  return (
    <div className="principle">
      <span>{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function Education({ year, degree, college, number }) {
  return (
    <div className="education-row">
      <span className="education-number">{number}</span>

      <span className="education-year">{year}</span>

      <div>
        <h3>{degree}</h3>
        <p>{college}</p>
      </div>
    </div>
  );
}

export default App;