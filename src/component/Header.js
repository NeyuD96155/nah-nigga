import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../style/Header.css";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const navigate = useNavigate(); // Create navigate function

  // Helper function to toggle theme
  const handleToggle = () => {
    toggle();
  };

  return (
    <div>
      <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <div style={{ position: "relative" }}>
          <ul>
            <li>
              <button
                className="home-button"
                style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                onClick={() => navigate('/')} // Navigate to Home
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="news-button"
                style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                onClick={() => navigate('/news')} // Navigate to News
              >
                News
              </button>
            </li>
            <li>
              <button
                className="contact-button"
                style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                onClick={() => navigate('/contact')} // Navigate to Contact
              >
                Contact
              </button>
            </li>
            <li>
              <button
                className="about-button"
                style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                onClick={() => navigate('/about')} // Navigate to About
              >
                About
              </button>
            </li>
            <li>
              <button
                className="switch-mode-button"
                style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                onClick={handleToggle}
              >
                {!dark ? "Dark" : "Light"} mode
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
