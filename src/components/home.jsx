import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, Award, ChevronRight, Code, Cloud, Database, Sun, Moon, Menu, X } from 'lucide-react';
import { Card, CardContent } from "../components/ui/card";
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // State management
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll handling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = 100;

      const sections = document.querySelectorAll('div[id]');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - offset;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      if (scrollPosition < windowHeight / 2) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services data
  const services = [
    {
      title: "Infrastructure as Code",
      icon: Cloud,
      description: "Building scalable cloud infrastructure using Terraform and AWS CloudFormation",
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "CI/CD Pipeline",
      icon: Code,
      description: "Implementing automated deployment pipelines with GitHub Actions",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Cloud Architecture",
      icon: Database,
      description: "Designing resilient and cost-effective AWS solutions",
      color: "from-purple-400 to-purple-600"
    }
  ];

  // Projects data without route information
  const projects = [
    {
      title: "AWS React Frontend Infrastructure",
      description: "A secure and scalable AWS infrastructure using Terraform, featuring CloudFront CDN for both static and dynamic content delivery, S3 storage, WAF protection, and automated SSL certificate management for a Student Enrollment System.",
      image: "/img/architecture-4k.png",
      services: [
        "Route53",
        "CloudFront",
        "WAF", 
        "S3",
        "ACM",
        "IAM",
      ],
      github: "https://github.com/CaringalML/AWS-React-Frontend-Infrastructure",
      architecture: [
        "Route53 DNS",
        "CloudFront CDN",
        "WAF Protection", 
        "Origin Access Control",
        "S3 Storage",
        "ACM Certificate"
       ]
    },
    {
      title: "AWS Laravel RESTful API Backend Infrastructure",
      description: "A highly available and scalable AWS infrastructure using Terraform that deploys a Laravel API application with ECS Fargate for containerization, RDS MySQL for database, ALB for load balancing, and Route 53 for DNS management, all secured within a VPC with public and private subnets across multiple availability zones.",
      image: "/img/backend-infra.png",
      services: [
        "ECS with Fargate",
        "ECR",
        "RDS - MySQL",
        "VPC",
        "ALB",
        "Route 53", 
        "CloudWatch",
        "Secrets Manager"
    ],
      github: "https://github.com/CaringalML/AWS-Laravel-RESTful-API-Backend-Infrastructure",
      architecture: [
        "Route 53", 
        "ALB",
        "VPC",
        "ECS Fargate",
        "ECR",
        "RDS MySQL"
    ]
    },


    {
      title: "Artisan Tiling React + Vite Cloudfront",
      description: "A modern, responsive website for Artisan Tiling, a professional tiling company based in Hamilton, New Zealand. Built with React and Vite, deployed on AWS using Terraform for infrastructure management, with automated CI/CD through GitHub Actions.",
      image: "/img/2-landing.png",
      services: [
        "Route53",
        "CloudFront",
        "WAF", 
        "S3",
        "ACM",
        "IAM",
    ],
      github: "https://github.com/CaringalML/Artisan-Tiling-React-JS-Cloudfront",
      architecture: [
        "Route53 DNS",
        "CloudFront CDN",
        "WAF Protection", 
        "Origin Access Control",
        "S3 Storage",
        "ACM Certificate"
    ]
    },

    {
      title: "Artisan Tiling Express JS Serverless Lambda",
      description: "A serverless Node.js/Express API built for Artisan Tiling NZ, leveraging AWS Lambda with MongoDB integration. This API handles customer inquiries with comprehensive logging and monitoring capabilities, deployed using Terraform for infrastructure management.",
      image: "/img/api-gateway-lambda.png",
      services: [
        "Route 53",
        "API Gateway",
        "Lambda",
        "Cloudwatch", 
        "ACM",
        "IAM Role",
    ],
      github: "https://github.com/CaringalML/Artisan-Tiling-Express-JS-Serverless-Lambda",
      architecture: [
       "Route 53",
        "API Gateway",
        "Lambda",
        "Cloudwatch", 
        "MonggoDB",
    ]
    }
  ];

  // Certifications data
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      credentialId: "AWS04323279",
      icon: Cloud,
      image: "img/aws-cloud-practitioner.png",
      link: "https://www.credly.com/badges/b08c2526-a7ed-429c-bcc1-bfaa0fca90f3/public_url"
    },
    {
      title: "AWS Certified Solutions Architect Associate",
      issuer: "Amazon Web Services (AWS)",
      status: "In Progress",
      expectedDate: "2025",
      icon: Cloud,
      inProgress: true
    }
  ];

  return (
    <div className={`portfolio-container ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation Bar */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-wrapper">
          <div className="logo-container">
          <Cloud className="logo-icon" />
          <Link 
            to="/" 
            className="logo-text"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('hero');
              setTimeout(() => {
                window.location.reload();
              }, 800);
            }}
          >
            CaringalML
          </Link>
        </div>
            
            <div className="desktop-menu">
              <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>
                Home
              </a>
              <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>
                Certifications
              </a>
              <a href="#services" className={activeSection === 'services' ? 'active' : ''}>
                Services
              </a>
              <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
                Projects
              </a>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                Contact
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="theme-toggle"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>
              Home
            </a>
            <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>
              Certifications
            </a>
            <a href="#services" className={activeSection === 'services' ? 'active' : ''}>
              Services
            </a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
              Projects
            </a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-grid">
            <div>
              <div className="certification-badge">
                <Award className="w-4 h-4" />
                AWS Certified Cloud Practitioner
              </div>
              <h1 className="hero-title">
                Martin Lawrence M. Caringal
                <span className="hero-subtitle">
                  DevOps Engineer
                </span>
              </h1>
              <p className="hero-description">
                Specializing in cloud infrastructure automation and modern DevOps practices.
                Bridging the gap between development and operations with AWS solutions.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="primary-button">
                  Get in Touch
                </a>
                <a href="https://github.com/CaringalML" className="secondary-button">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
            <div className="hero-image-container">
              <div className="hero-image-gradient"></div>
              <img 
                src="img/martin.JPG"
                alt="Profile"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div id="certifications" className="certifications-section">
        <div className="section-content">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className={`certification-card ${cert.inProgress ? 'in-progress' : ''}`}>
                <div className="certification-content">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="certification-badge-logo"
                    />
                  ) : (
                    <cert.icon className="certification-icon" />
                  )}
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                  {cert.inProgress ? (
                    <>
                      <span className="status-badge">In Progress</span>
                      <p className="certification-date">Expected: {cert.expectedDate}</p>
                    </>
                  ) : (
                    <>
                      <p className="certification-date">Issued: {cert.date}</p>
                      <p className="certification-id">Credential ID: {cert.credentialId}</p>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-credential">
                        View Credential
                      </a>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="services-section">
        <div className="section-content">
          <h2 className="section-title">Cloud Services & Expertise</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className={`service-card-gradient bg-gradient-to-br ${service.color}`}></div>
                <service.icon className="service-icon" />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="projects-section">
        <div className="section-content">
          <h2 className="section-title">Featured Cloud Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-services">
                    <h4 className="services-title">AWS Services</h4>
                    <div className="services-tags">
                      {project.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="service-tag">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-architecture">
                    <h4 className="architecture-title">Architecture</h4>
                    <div className="architecture-flow">
                      {project.architecture.map((service, archIndex) => (
                        <React.Fragment key={archIndex}>
                          <span>{service}</span>
                          {archIndex < project.architecture.length - 1 && (
                            <ChevronRight className="architecture-arrow" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={project.github} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    View Source Code
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <div className="contact-container">
          <Card className="contact-card">
            <CardContent className="contact-content">
              <div className="contact-header">
                <Cloud className="contact-icon" />
                <h2 className="contact-title">Let's Build Something Amazing</h2>
                <p className="contact-description">
                  Looking to optimize your cloud infrastructure or implement DevOps practices?
                  Let's discuss how we can work together.
                </p>
                <div className="contact-buttons">
                  <a href="mailto:lawrencecaringal5@gmail.com" className="contact-primary-button">
                    <Mail className="w-5 h-5" />
                    Email Me
                  </a>
                  <a href="tel:0221248553" className="contact-secondary-button">
                    <Phone className="w-5 h-5" />
                    Call Me
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;