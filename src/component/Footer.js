import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-app-footer">
      <div className="footer-footer-content">
        <section className="footer-footer-section">
          <h4>About</h4>
          <p>Learn more about My Application and our team.</p>
          <Link to="/about" className="footer-link">
            About Us
          </Link>
        </section>
        <section className="footer-footer-section">
          <h4>Contact</h4>
          <p>Have questions? Get in touch with us.</p>
          <Link to="/contact" className="footer-link">
            Contact Us
          </Link>
        </section>
        <section className="footer-footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100087274279487"
              className="footer-link"
            >
              Facebook
            </a>
            <a href="https://twitter.com/i4dopamint" className="footer-link">
              Twitter
            </a>
            <a
              href="https://www.instagram.com/yekwolah/"
              className="footer-link"
            >
              Instagram
            </a>
          </div>
        </section>
        <section className="footer-footer-section">
          <h4>Contributor</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
        </section>
      </div>
      <div className="footer-footer-bottom">
        <p>© 2024 Mint Ticket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
