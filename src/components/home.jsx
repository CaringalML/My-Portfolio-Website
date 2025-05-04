import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, Award, ChevronRight, Code, Cloud, Database, Sun, Moon, Menu, X, Server, Network, FileCode, GitBranch, ZoomIn } from 'lucide-react';
import { Card, CardContent } from "../components/ui/card";
import '../styles/home.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  // State management
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // New state for the image modal
  const [modalImage, setModalImage] = useState(null);

  // Function to open modal with an image
  const openImageModal = (imageUrl) => {
    setModalImage(imageUrl);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Function to close the modal
  const closeImageModal = () => {
    setModalImage(null);
    // Restore scrolling
    document.body.style.overflow = 'auto';
  };

  // Handle ESC key press to close the modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && modalImage) {
        closeImageModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [modalImage]);

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
      icon: FileCode,
      description: "Building scalable cloud infrastructure using Terraform",
      color: "from-orange-400 to-orange-600"
    },
    {
      "title": "CI/CD Pipeline",
      "icon": GitBranch,
      "description": "Implementing automated deployment pipelines with GitHub Actions, AWS Elastic Beanstalk, and AWS CodePipeline",
      "color": "from-blue-400 to-blue-600"
    },
    {
      title: "Cloud Architecture",
      icon: Network,
      description: "Designing resilient and cost-effective AWS solutions",
      color: "from-purple-400 to-purple-600"
    }
  ];

  // Projects data without route information
  const projects = [
    {
      title: "CloudStruct Frontend: A Scalable Approach with CloudFront, S3, AI Powered Rekognition",
      description: "A secure and scalable AWS infrastructure using Terraform, featuring CloudFront CDN for delivering both static and dynamic content, S3 for storage, WAF for protection, automated SSL certificate management, and AI-powered image analysis with Amazon Rekognition—all designed for a Student Enrollment System.",
      image: "/img/rekognition.png",
      services: [
        "Route53",
        "CloudFront",
        "WAF", 
        "S3",
        "ACM",
        "IAM",
        "Cloudwatch", 
        "Amazon Rekognition"
      ],
      github: "https://github.com/CaringalML/CloudStruct-Frontend-A-Scalable-Approach-with-CloudFront-S3-AI-Powered-Rekognition.git",
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
      title: "CloudStruct: Serverless Backend with AWS Fargate, Aurora, and Event-Driven Lambda CI/CD Automation",
      description: "Production-grade serverless backend infrastructure demonstrating advanced DevOps expertise. Implements enterprise-level high availability, fault tolerance, and cost optimization through a sophisticated multi-AZ design with ECS Fargate, Aurora Serverless, and Lambda. Features comprehensive automation with EventBridge-triggered deployments, infrastructure as code with Terraform, and GitHub Actions CI/CD pipeline.",
      image: "/img/AWS-ECS-Fargates.png",
      services: [
        "ECS with Fargate",
        "ECR",
        "Aurora MySQL Serverless",
        "Lambda",
        "EventBridge",
        "VPC",
        "ALB",
        "Route 53", 
        "CloudWatch",
        "IAM",
        "ACM",
        "S3 Gateway Endpoint"
      ],
      github: "https://github.com/CaringalML/CloudStruct-Serverless-Backend-with-AWS-Fargate-Aurora-and-Event-Driven-Lambda-CI-CD-Automation.git",
      architecture: [
       "Route 53",
       "Application Load Balancer",
       "Elastic Container Service(Fargate)",
       "RDS Aurora MySQL Serverless",
       "CloudWatch",
      ],
      tier: "Backend Infrastructure"
    },


    // {
    //   title: "Artisan Tiling React + Vite Cloudfront",
    //   description: "A modern, responsive website for Artisan Tiling, a professional tiling company based in Hamilton, New Zealand. Built with React and Vite, deployed on AWS using Terraform for infrastructure management, with automated CI/CD through GitHub Actions.",
    //   image: "/img/frontend-artisan-tilings.png",
    //   services: [
    //     "Route53",
    //     "CloudFront",
    //     "WAF", 
    //     "S3",
    //     "ACM",
    //     "IAM",
    // ],
    //   github: "https://github.com/CaringalML/Artisan-Tiling-React-JS-Cloudfront",
    //   architecture: [
    //     "Route53 DNS",
    //     "CloudFront CDN",
    //     "WAF Protection", 
    //     "Origin Access Control",
    //     "S3 Storage",
    //     "ACM Certificate"
    // ]
    // },


    {
      title: "CloudStruct: A Frontend Infrastructure with AWS CloudFront and S3",
      description: "A complete serverless infrastructure solution for hosting frontend static web applications using AWS CloudFront and S3.",
      image: "/img/aws-architecture-diagram.png",
      services: [
        "Route53",
        "CloudFront",
        "WAF", 
        "S3",
        "ACM",
        "Cloudwatch", 
    ],
      github: "https://github.com/CaringalML/CloudStruct-A-Frontend-Infrastructure-with-AWS-CloudFront-and-S3.git",
      architecture: [
       "Route53",
        "CloudFront",
        "WAF", 
        "S3",
        "ACM",
        "Cloudwatch", 
    ]
    },
    

    {
      title: "Node-JS Lambda DynamoDB Serverless",
      description: "A serverless Node.js/Express RESTful API, leveraging AWS API Gateway, Lambda with DynamoDB integration. This RESTful API handles Inventory Management System with comprehensive logging and monitoring capabilities, deployed using Terraform and Makefile for infrastructure management.",
      image: "/img/api-gateway-lambda-dynamodb-serverless.png",
      services: [
        "Route 53",
        "API Gateway",
        "Lambda",
        "DynamoDB", 
        "Cloudwatch", 
    ],
      github: "https://github.com/CaringalML/Node-JS-Lambda-DynamoDB-Serverless.git",
      architecture: [
       "Route 53",
        "API Gateway",
        "Lambda",
        "DynamoDB",
        "Cloudwatch"
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
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      credentialId: "AWS04323279",
      icon: Cloud,
      image: "img/aws-certified-solutions-architect-associate.png",
      link: "https://www.credly.com/badges/b98862af-ff93-442d-81e8-03258924ff4f/public_url"
    },
    {
      title: "AWS Certified SysOps Administrator - Associate",
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
                AWS Certified Solutions Architect - Associate
              </div>
              <h1 className="hero-title">
                Martin Lawrence Caringal
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
                src="img/martin-barong.png"
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
          <div 
            className="project-image-container"
            onClick={() => openImageModal(project.image)}
          >
            <img 
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="image-overlay">
              <ZoomIn className="zoom-icon" />
            </div>
          </div>
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

      {/* Image Modal (Google Drive Style) */}
      {modalImage && (
        <div className="gdrive-modal-overlay" onClick={closeImageModal}>
          <div className="gdrive-modal-header">
            <div className="gdrive-modal-title">
              {projects.find(p => p.image === modalImage)?.title || 'Project Image'}
            </div>
            <button className="gdrive-close-button" onClick={closeImageModal}>
              <X className="close-icon" />
            </button>
          </div>
          
          <div className="gdrive-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={modalImage} 
              alt="Enlarged project" 
              className="gdrive-modal-image" 
            />
          </div>
          
          <div className="gdrive-modal-footer">
            <div className="gdrive-image-counter">
              {projects.findIndex(p => p.image === modalImage) + 1} of {projects.length}
            </div>
          </div>
        </div>
      )}

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