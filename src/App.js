import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  ArrowRight,
  Star,
  Sparkles,
  FileText,
  MessageCircle,
  Sun,
  Moon,
} from "lucide-react";
import "./App.css";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState("dark"); // Default to dark mode

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (!localStorage.getItem("portfolio-theme")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A fully responsive online shopping platform with cart, checkout, and payment gateway integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    },
    {
      title: "AI Task Manager",
      description:
        "Smart task management app with AI-powered prioritization and team collaboration features",
      tech: ["Next.js", "OpenAI", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      gradient: "linear-gradient(135deg, #9333ea, #ec4899)",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for managing multiple social media accounts with real-time insights",
      tech: ["React", "D3.js", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      gradient: "linear-gradient(135deg, #f97316, #ef4444)",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Mobile-first fitness tracker with workout plans, progress tracking, and nutrition guidance",
      tech: ["React Native", "GraphQL", "AWS"],
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop",
      gradient: "linear-gradient(135deg, #10b981, #059669)",
    },
    {
      title: "Real Estate Platform",
      description:
        "Property listing and virtual tour platform with advanced search and mapping features",
      tech: ["Vue.js", "Three.js", "Express"],
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      gradient: "linear-gradient(135deg, #6366f1, #9333ea)",
    },
    {
      title: "Learning Management System",
      description:
        "Online education platform with video courses, quizzes, and progress tracking",
      tech: ["React", "WebRTC", "Redis"],
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
      gradient: "linear-gradient(135deg, #eab308, #f97316)",
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      items: ["React & Next.js", "TypeScript", "Modern CSS"],
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
      iconGradient: "linear-gradient(135deg, #60a5fa, #22d3ee)",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      items: ["Responsive Design", "Design Systems"],
      gradient: "linear-gradient(135deg, #9333ea, #ec4899)",
      iconGradient: "linear-gradient(135deg, #c084fc, #f472b6)",
    },
    {
      name: "Backend & Mobile",
      icon: Smartphone,
      items: [
        "Node.js & Python",
        "React Native",
        "Flutter",
        "Kotlin (Android)",
        "Database Design",
        "PHP",
      ],
      gradient: "linear-gradient(135deg, #10b981, #059669)",
      iconGradient: "linear-gradient(135deg, #34d399, #10b981)",
    },
  ];

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };

    refs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Mouse Move Effect */}
      <div
        className="mouse-move-effect"
        style={{
          left: `${mousePosition.x / 50}px`,
          top: `${mousePosition.y / 50}px`,
        }}
      />

      {/* Animated Background */}
      <div className="animated-bg">
        <div className="animated-circle"></div>
        <div className="animated-circle"></div>
        <div className="animated-circle"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="logo">
              <Sparkles className="icon-sparkles" />
              Philemon
            </div>

            <div className="nav-desktop">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`nav-button ${
                      activeSection === item.toLowerCase() ? "active" : ""
                    }`}
                  >
                    {item}
                  </button>
                )
              )}

              {/* Theme Toggle Button */}
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
              >
                {theme === "dark" ? (
                  <Sun size={20} className="theme-icon" />
                ) : (
                  <Moon size={20} className="theme-icon" />
                )}
              </button>
            </div>

            <div className="mobile-nav-right">
              {/* Theme Toggle for Mobile */}
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}
              >
                {theme === "dark" ? (
                  <Sun size={20} className="theme-icon" />
                ) : (
                  <Moon size={20} className="theme-icon" />
                )}
              </button>

              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="mobile-menu-button"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="hero">
        <div className="hero-content">
          <div className="avatar-container">
            <div className="avatar-gradient"></div>
            <div className="avatar">
              <img
                src="/profile.png"
                alt="Philemon"
                className="avatar-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/profile.png";
                }}
              />
            </div>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">Philemon</span>
          </h1>

          <p className="hero-subtitle">Web and Mobile App Developer</p>

          <p className="hero-description">
            I build modern websites and mobile applications that help businesses
            connect with their customers. From concept to deployment, I create
            digital solutions that work beautifully on all devices.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection("projects")}
              className="hero-button-primary"
            >
              View My Work
              <ArrowRight className="arrow-icon" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hero-button-secondary"
            >
              Get In Touch
            </button>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">
              <div className="social-icon">
                <Github size={24} />
              </div>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon">
                <Linkedin size={24} />
              </div>
            </a>
            <a href="#" className="social-link">
              <div className="social-icon">
                <Mail size={24} />
              </div>
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-circle">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="title-divider"></div>

          <div className="about-card">
            <p className="about-text">
              Hello! I'm a passionate{" "}
              <span className="about-highlight">
                Web and Mobile App Developer
              </span>
              with a focus on creating digital solutions that bridge businesses
              with their customers. I specialize in building responsive websites
              and cross-platform mobile applications.
            </p>
            <p className="about-text">
              My expertise spans both frontend and backend development, allowing
              me to deliver complete solutions from initial concept to final
              deployment. Whether it's a business website, e-commerce platform,
              or mobile app, I ensure seamless performance across all devices.
            </p>
            <p className="about-text">
              I believe in writing clean, maintainable code and staying current
              with modern technologies. Let's work together to bring your
              digital ideas to life!
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section ref={projectsRef} className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="title-divider"></div>
          {/* <p className="section-subtitle">Check out some of my recent work</p> */}
          <p className="section-subtitle">
            <span
              style={{
                fontSize: "3rem",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              😔
            </span>
            There is no recent published project!
          </p>

          {/*<div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div
                    className="project-gradient"
                    style={{ background: project.gradient }}
                  ></div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-link">
                    View Project
                    <ExternalLink className="project-link-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>*/}
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="title-divider"></div>
          <p className="section-subtitle">Technologies I work with</p>

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="skill-card">
                  <div
                    className="skill-gradient"
                    style={{ background: skill.gradient }}
                  ></div>

                  <div className="relative">
                    <div
                      className="skill-icon-container"
                      style={{ background: skill.iconGradient }}
                    >
                      <Icon className="skill-icon" />
                    </div>

                    <h3 className="skill-name">{skill.name}</h3>

                    <ul className="skill-list">
                      {skill.items.map((item, i) => (
                        <li key={i} className="skill-item">
                          <Star className="skill-star" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">
              <span className="gradient-text">Let's Create Together</span>
            </h2>
            <div className="title-divider mx-auto"></div>

            <p className="section-subtitle">
              I'm always excited to work on new projects and collaborate with
              talented people. Whether you have a question or just want to say
              hi, feel free to reach out!
            </p>

            <div className="contact-card">
              <div className="contact-buttons">
                <div className="contact-button-item">
                  <a
                    href="mailto:niphilemon41@gmail.com" // Updated to your email
                    className="hero-button-primary"
                  >
                    <Mail className="mail-icon" />
                    Email Me
                  </a>
                  <p className="button-description">niphilemon41@gmail.com</p>
                </div>

                <div className="contact-button-item">
                  <a
                    href="https://wa.me/250789657065?text=Hi%20Philemon,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button-secondary whatsapp-button"
                  >
                    <MessageCircle className="whatsapp-icon" />
                    WhatsApp
                  </a>
                  <p className="button-description">0789657065</p>
                </div>

                <div className="contact-button-item">
                  <a
                    href="/PHILEMON_CV.pdf"
                    download="Philemon_Ndizeye_CV.pdf"
                    className="hero-button-third"
                  >
                    <FileText className="download-icon" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <div className="contact-social-icon">
                  <Github size={32} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/ni-philemon-8299103a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <div className="contact-social-icon">
                  <Linkedin size={32} />
                </div>
              </a>
              <a href="mailto:john@example.com" className="contact-social-link">
                <div className="contact-social-icon">
                  <Mail size={32} />
                </div>
              </a>
              <a
                href="https://wa.me/250789657065?text=Hi,%20I%20saw%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <div className="contact-social-icon whatsapp-social">
                  <MessageCircle size={32} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            Designed & Built by{" "}
            <span className="footer-highlight">N.Philemon</span>
          </p>
          <p className="copyright">&copy; 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
