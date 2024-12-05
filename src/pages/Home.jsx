import React from "react";
import "../styles/Home.css";
import logo from "../assets/logo.png"; // Path to the logo
import cvFile from "../assets/G.A.K.J.PESHALA.pdf";
import profileImage from "../assets/jp.png";
import video1 from "../assets/1.mp4"; // Path to video 1
import video2 from "../assets/2.mp4"; // Path to video 2
import video3 from "../assets/3.mp4"; // Path to video 3

import androidLogo from "../assets/android.png";
import figmaLogo from "../assets/figma.png";
import htmlLogo from "../assets/html.webp";
import javaLogo from "../assets/java.webp";
import microsoftLogo from "../assets/micro.png";
import mongoLogo from "../assets/mongo.png";
import nodeLogo from "../assets/node.png";
import reactLogo from "../assets/react.png";
import sqlLogo from "../assets/sql.png";
import cPlusPlusLogo from "../assets/c++.jpeg";
import cssLogo from "../assets/css.webp";
import githubLogo from "../assets/github.jpg";
import jiraLogo from "../assets/jira.jpeg";
import jsLogo from "../assets/js.webp";

import instagramIcon from "../assets/inster.png";
import linkedinIcon from "../assets/link.png";
import githubIcon from "../assets/git.png";
import discordIcon from "../assets/dis.png";


function Home() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "55px",
              height: "55px",
              marginRight: "10px",
            }}
          />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          href={cvFile}
          download="Jayani_Peshala_CV.pdf"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              backgroundColor:  "#4c8baf",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Download CV
          </button>
        </a>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left">
          <img src={profileImage} alt="Jayani Peshala" className="profile-image" />
        </div>
        <div className="hero-right">
          <h1>Hi, I'm Jayani</h1>
          <h3>IT Undergraduate at SLIIT <br></br>Specializing in Information Technology</h3>
          <p>
            I am an IT undergraduate specializing in mobile development,<br></br> backend
            development, and UI/UX design. Fluent in English and passionate
            about creating user-friendly and functional applications.
            
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" style={{ marginBottom: "30px" }}>
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <video controls src={video1} className="project-video" />
            <h3>Project 1</h3>
            <h4>Create a Moblie App Using a figma</h4>
            <p>As an undergraduate student designed a user-friendly mobile app for an online
Burger shop called Foodgo using Figma. The app was visually appealing and
functional, with a focus on user experience. Key screens like the main menu,
product categories, cart management, and payment verification were carefully
crafted. This project helped me improve my UI/UX design skills, and I'm looking
forward to contributing to more creative and user-friendly technological
solutions in the future!</p>
          </div>
         
          <div className="project-card">
            <video controls src={video3} className="project-video" />
            <h3>Project 2</h3>
            <h4>Create a Moblie App  Using a Android studio</h4>
            <p>Task Tide is a user-friendly app designed to help individuals manage their daily
tasks efficiently. With its intuitive interface, users can easily organize,
prioritize, and track their to-dos, ensuring they stay on top of their
responsibilities. Whether it's work, personal, or recurring tasks, Task Tide helps
streamline daily activities, offering reminders, progress tracking, and
customization to suit each user's needs..</p>
          </div>
         <div> <div className="project-card">
            <br></br> <br></br> <br></br> <br></br>
            <video controls src={video2} className="project-video" />
            <h3>Project 3</h3>
            <p>Nature Hug - Order Management System
Role: Backend/Frontend Developer.
Technologies: React, MongoDB.
Achievements: Built APIs, integrated forms, and improved operational
efficiency</p>
          </div></div>
        </div>
        
      </section>

     
      {/* Skills Section */}
      <section id="skills" style={{ marginBottom: "30px" }}>
        <h2>Skills</h2>
        <div className="skills-container">
          <br></br> <br></br>

          <div className="skill-card">
            <img src={androidLogo} alt="Android Studio" className="skill-logo" />
            <p>Android Studio</p>
          </div><br></br><br></br> <br></br><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={figmaLogo} alt="Figma" className="skill-logo" />
            <p>Figma</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={htmlLogo} alt="HTML" className="skill-logo" />
            <p>HTML</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={cssLogo} alt="CSS" className="skill-logo" />
            <p>CSS</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={javaLogo} alt="Java" className="skill-logo" />
            <p>Java</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={jsLogo} alt="JavaScript" className="skill-logo" />
            <p>JavaScript</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={microsoftLogo} alt="Microsoft 365" className="skill-logo" />
            <p>Microsoft 365</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={mongoLogo} alt="MongoDB" className="skill-logo" />
            <p>MongoDB</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={nodeLogo} alt="Node.js" className="skill-logo" />
            <p>Node.js</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={reactLogo} alt="React" className="skill-logo" />
            <p>React</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={sqlLogo} alt="SQL" className="skill-logo" />
            <p>SQL</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={cPlusPlusLogo} alt="C++" className="skill-logo" />
            <p>C++</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={githubLogo} alt="GitHub" className="skill-logo" />
            <p>GitHub</p>
          </div><br></br><br></br> <br></br>
          <div className="skill-card">
            <img src={jiraLogo} alt="Jira" className="skill-logo" />
            <p>Jira</p>
          </div><br></br><br></br> <br></br>
        </div>
      </section>
      <br></br><br></br> <br></br>
      <footer id="contact">
  <div className="footer-content">
    <h2>Connect with Me</h2>
    <h3>Let's work together and create something amazing!</h3>
    <p>Email: jayanikalansooriya24@gmail.com</p>
    <p>Phone: 0761262607</p>
  </div>
  <div className="footer-social">
    <h2>Follow me on</h2>
    <div className="social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" />
      </a>
      <a href="https://github.com/jayanikalansooriya24" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" />
      </a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
        <img src={discordIcon} alt="Discord" />
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Home;
