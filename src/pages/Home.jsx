import React, { useState } from 'react';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/inster.png';
import linkedinIcon from '../assets/link.png';
import '../styles/Home.css';

const Home = () =>{
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    
  return (
    <div className="container">
      <header className="navbar">
        <div className="nav-links">
            <a href="/">Home</a>
            <a href="#">Contact</a>
            <a href="#">Products</a>
            <a href="#">Services</a>
            <a href="#">Careers</a>
        </div>
        <div className="info">
          <a href="#" className="gallery">Gallery</a>
          <a href="#">Info</a>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {menuOpen && (
            <div className="dropdown-menu">
              <a href="#">Dashboard</a>
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Log Out</a>
            </div>
          )}
        </div>
      </header>

      <main className="main-content">
        <section className="text-content">
          <p className="tagline">Made for life</p>
          <h1 className="title">Sorel.</h1>
          <p className="description">Building and finishing </p>
          <p className="Product">materials.</p>
        </section>
        <section className="image-content">
          <div className="background-image"></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">News</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>

        </div>
        <p>© {new Date().getFullYear()} Sorel. All rights reserved.</p>
        <div className="footer-social-links">
          <img src={facebookIcon} alt="Facebook" />
          <img src={instagramIcon} alt="Instagram" />
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
