import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="header-container">
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li>
            <button
              className="header-nav-button home-header"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="header-nav-button news-header"
              onClick={() => navigate("/news")}
            >
              News
            </button>
          </li>
          <li>
            <button
              className="header-nav-button contact-header"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </li>
          <li>
            <button
              className="header-nav-button about-header"
              onClick={() => navigate("/about")}
            >
              About
            </button>
          </li>
          <li>
            <button className="header-theme-toggle" onClick={toggleTheme}>
              Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
