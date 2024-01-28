import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Header.css";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Helper function to toggle theme
  const handleToggle = () => {
    toggle();
  };

  return (
    <div>
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div style={{ position: "relative" }}>
          <ul>
            <li>
              <button
                className="home-header"
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                }}
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="news-header"
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                }}
                onClick={() => navigate("/news")}
              >
                News
              </button>
            </li>
            <li>
              <button
                className="contact-header"
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                }}
                onClick={() => navigate("/contact")}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                className="about-header"
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                }}
                onClick={() => navigate("/about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="switch-mode-header"
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                }}
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
