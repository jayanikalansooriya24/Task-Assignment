import React from "react";
import "../styles/Home.css";
import logo from "../assets/logo.png"; // Path to the logo
import cvFile from "../assets/G.A.K.J.PESHALA.pdf";
import profileImage from "../assets/jp.png";
import video1 from "../assets/1.mp4"; // Path to video 1
import video2 from "../assets/2.mp4"; // Path to video 2
import video3 from "../assets/3.mp4"; // Path to video 3

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
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
          />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
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
              backgroundColor: "#4CAF50",
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
          <h3>IT Undergraduate at SLIIT specializing in Information Technology</h3>
          <p>
            I am an IT undergraduate specializing in mobile development, backend
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
        <p>
          Java, JavaScript, CSS, React, MongoDB, Android Studio, Figma, HTML,
          PHP, C++, GitHub, Microsoft 365, Node.js, SQL
        </p>
      </section>

      {/* Contact Section */}
      <footer id="contact" style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Connect with Me</h2>
        <p>Email: jayanikalansooriya24@gmail.com</p>
        <p>Phone: 0761262607</p>
      </footer>
    </div>
  );
}

export default Home;
