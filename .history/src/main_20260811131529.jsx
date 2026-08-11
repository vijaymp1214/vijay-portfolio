import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, Phone,
  MapPin, Menu, X, ExternalLink, Code2, Database, Server,
  Layout, Terminal, Sparkles, Send, CheckCircle2
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    no: "01",
    type: "JAVA FULL STACK",
    title: "Job Portal Management System",
    desc: "A complete hiring workflow with job posting, applications, candidate profiles, JWT authentication, and role-based access control.",
    tech: ["React.js", "Spring Boot", "MySQL", "JWT"],
    github: "#"
  },
  {
    no: "02",
    type: "JAVA FULL STACK",
    title: "Marksheet Generator",
    desc: "A full-stack academic management platform for student records, marks entry, marksheet generation, secure authentication, and role-based access control.",
    tech: ["Spring Boot", "React.js", "MongoDB", "JWT"],
    github: "#"
  },
  {
    no: "03",
    type: "FRONTEND BUILD",
    title: "BookMyShow Clone",
    desc: "Responsive movie discovery and booking experience with show selection, interactive seats, and dynamic JavaScript state.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#"
  },
  {
    no: "04",
    type: "FRONTEND BUILD",
    title: "Online Real Estate Broker",
    desc: "A clean property browsing and inquiry interface designed to help users compare listings, scan details, and start a conversation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#"
  },
  {
    no: "05",
    type: ".NET FULL STACK",
    title: "eshoponWeb",
    desc: "A structured e-commerce application built with ASP.NET Core MVC, C#, Entity Framework Core, and SQL Server for products, cart, orders, and checkout workflows.",
    tech: ["ASP.NET Core", "C#", "EF Core", "SQL Server"],
    github: "#"
  }
];

const skills = {
  Programming: ["Java", "OOPs", "Collections", "Exception Handling", "Multithreading"],
  Backend: ["Spring Boot", "Spring MVC", "Spring Security", "REST APIs", "Hibernate", "JPA"],
  Frontend: ["HTML5", "CSS3", "JavaScript ES6", "Bootstrap", "React.js"],
  Data: ["MySQL", "MongoDB", "SQL"],
  Tools: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code", "NetBeans"],
  "Human Skills": ["Problem Solving", "Communication", "Teamwork", "Analytical Thinking"]
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const submitForm = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className="site">
      <div className="noise" />
      <div className="cursor-glow" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span>VP</span>
            <b>/ 2026</b>
          </a>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> SOFTWARE DEVELOPER · DOMBIVLI, INDIA</div>
            <h1>Building useful<br /><em>things with code.</em></h1>
            <p className="hero-text">
              I'm <strong>Vijay Prajapati</strong> — a detail-oriented full-stack developer who turns
              real-world problems into efficient, scalable applications.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Explore my work <ArrowUpRight size={17} /></a>
              <a href="/Vijay-Prajapati-Resume.pdf" className="btn btn-ghost" download>Download resume <Download size={16} /></a>
            </div>
            <div className="contact-mini">
              <a href="mailto:vijay12p14@gmail.com"><Mail size={16}/> vijay12p14@gmail.com</a>
              <a href="tel:+918097199485"><Phone size={16}/> +91 80971 99485</a>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-card">
              <div className="window-bar"><i/><i/><i/><span>vijay.dev</span></div>
              <div className="code-body">
                <span className="line-no">01</span><span><b>const</b> developer = &#123;</span>
                <span className="line-no">02</span><span>&nbsp;&nbsp;name: <mark>"Vijay"</mark>,</span>
                <span className="line-no">03</span><span>&nbsp;&nbsp;role: <mark>"Full Stack"</mark>,</span>
                <span className="line-no">04</span><span>&nbsp;&nbsp;focus: [<mark>"Java"</mark>, <mark>".NET"</mark>],</span>
                <span className="line-no">05</span><span>&nbsp;&nbsp;available: <b>true</b></span>
                <span className="line-no">06</span><span>&#125;;</span>
              </div>
              <div className="status"><span className="pulse"/> READY TO BUILD</div>
            </div>
            <div className="floating-tag tag-one">Java</div>
            <div className="floating-tag tag-two">.NET</div>
            <div className="floating-tag tag-three">React</div>
          </div>
        </section>

        <div className="ticker"><div>JAVA <span>✦</span> SPRING BOOT <span>✦</span> REACT <span>✦</span> .NET <span>✦</span> REST API <span>✦</span> SQL <span>✦</span> JAVA <span>✦</span> SPRING BOOT <span>✦</span> REACT <span>✦</span> .NET</div></div>

        <section className="section container" id="about">
          <SectionHead number="01" title="profile" />
          <div className="about-grid">
            <div>
              <h2>Curious by nature.<br /><span>Precise by practice.</span></h2>
              <p className="large-copy">
                With a strong foundation in Java, Spring Boot, REST APIs, React.js, SQL, and MySQL,
                I enjoy working across the stack — from a clean interface to the secure API behind it.
              </p>
              <p>
                I'm seeking an opportunity where I can contribute, keep learning, and ship work that matters.
              </p>
            </div>
            <div className="principles">
              <Principle n="A01" title="Build with intent">Every screen and endpoint should make a user's next step clearer.</Principle>
              <Principle n="A02" title="Learn in public">Projects are experiments, feedback is fuel, and improvement is the habit.</Principle>
              <Principle n="A03" title="Own the details">Readable code, thoughtful states, and dependable interactions matter.</Principle>
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <SectionHead number="02" title="toolkit" />
          <div className="section-intro">The stack I reach for.</div>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, list], i) => (
              <div className="skill-card" key={group}>
                <div className="skill-icon">{i === 0 ? <Code2/> : i === 1 ? <Server/> : i === 2 ? <Layout/> : i === 3 ? <Database/> : i === 4 ? <Terminal/> : <Sparkles/>}</div>
                <h3>{group}</h3>
                <div className="chips">{list.map(x => <span key={x}>{x}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionHead number="03" title="selected work" />
          <div className="section-intro project-intro"><span>Proof, not promises.</span><small>05 PROJECTS</small></div>
          <div className="projects">
            {projects.map((p) => (
              <article className="project-card" key={p.no}>
                <div className="project-top"><span>{p.no} — {p.type}</span><ArrowUpRight size={20}/></div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="chips">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                <a href={p.github} className="project-link" onClick={e => p.github === "#" && e.preventDefault()}>
                  View on GitHub <Github size={16}/>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section container" id="education">
          <SectionHead number="04" title="foundations" />
          <div className="section-intro">Where I learned<br />to keep going.</div>
          <div className="timeline">
            <Timeline year="2022 — 2025" title="B.Sc. Information Technology" place="SIA College of Higher Education, Dombivli" n="01"/>
            <Timeline year="2020 — 2022" title="HSC · Commerce" place="E.B. Madhavi Jr. College, Dombivli" n="02"/>
            <Timeline year="2019 — 2020" title="SSC" place="B.R. Madhavi English School, Dombivli" n="03"/>
          </div>
          <div className="cert">
            <div><span>CERTIFICATION</span><h3>Java Full Stack Development</h3><p>Develearn Institute · July 2026</p></div>
            <CheckCircle2 size={28}/>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <SectionHead number="05" title="open channel" light />
              <h2>Have a problem<br /><em>worth solving?</em></h2>
              <p>Tell me what you're building, what you're learning, or where I could help. I'm always open to a good conversation.</p>
              <div className="socials">
                <a href="mailto:vijay12p14@gmail.com"><Mail/> Email</a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
                <a href="https://github.com/" target="_blank" rel="noreferrer"><Github/> GitHub</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitForm}>
              <label>Your name<input required placeholder="John Doe"/></label>
              <label>Email address<input required type="email" placeholder="john@example.com"/></label>
              <label>Message<textarea required rows="5" placeholder="Tell me about your project..."/></label>
              <button className="btn btn-primary" type="submit">{sent ? "Message ready ✓" : "Send message"} <Send size={16}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>Vijay Prajapati / software developer</span>
        <b>VP.</b>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

function SectionHead({number, title, light=false}) {
  return <div className={`section-head ${light ? "light" : ""}`}><span>{number} /</span><b>{title}</b></div>
}
function Principle({n,title,children}) {
  return <div className="principle"><span>{n}</span><div><h3>{title}</h3><p>{children}</p></div></div>
}
function Timeline({year,title,place,n}) {
  return <div className="timeline-row"><span className="timeline-no">{n}</span><span className="timeline-year">{year}</span><div><h3>{title}</h3><p>{place}</p></div></div>
}

createRoot(document.getElementById("root")).render(<App />);
