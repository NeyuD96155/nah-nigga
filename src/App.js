import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Detail from "./component/Detail";
import Main from "./component/Main";
import About from "./component/About";
import News from "./component/News";
import DetailArticle from "./component/DetailArticle";
import { Ripple, initMDB } from "mdb-ui-kit";
import "./style/App.css";

initMDB({ Ripple });

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/news/detail_article/:id" element={<DetailArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
