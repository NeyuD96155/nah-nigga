import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../style/main.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <section className="footer-section">
          <h4>About</h4>
          <p>Learn more about My Application and our team.</p>
          <Link to="/about">About Us</Link> {/* Use Link component for internal navigation */}
        </section>
        <section className="footer-section">
          <h4>Contact</h4>
          <p>Have questions? Get in touch with us.</p>
          <Link to="/contact">Contact Us</Link> {/* Use Link component for internal navigation */}
        </section>
        <section className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            {/* External links can remain as <a> tags */}
            <a href="https://www.facebook.com/profile.php?id=100087274279487">Facebook</a>
            <a href="https://twitter.com/i4dopamint">Twitter</a>
            <a href="https://www.instagram.com/yekwolah/">Instagram</a>
          </div>
        </section>
        <section className="footer-section">
          <h4>Contributor</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
          {/* Newsletter subscription functionality can be added here */}
        </section>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Mint Ticket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
