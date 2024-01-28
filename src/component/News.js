import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Ripple, initMDB } from "mdb-ui-kit";
import "../style/News.css";
import { Articles } from "../Share/Articles";
initMDB({ Ripple });

export default function News() {
  const [article, setArticle] = useState([]);

  return (
    <div className="news-container">
      <div className="news-row">
        {Articles.map((article, index) => (
          <div className="news-col-12" key={index}>
            <div className="news-card text-center">
              
              <img
                src={article.image}
                alt={article.title}
                className="news-img-fluid"
              />
              <h3>{article.title}</h3>
              <p className="news-content-summary">{article.summary}</p>
              <Link
                to={`detail_article/${article.id}`}
                className="news-btn btn-outline-success btn-rounded"
                data-mdb-ripple-color="dark"
                onClick={() => setArticle(article)}
              >
                More Detail
              </Link>
            </div>
          </div>
        ))}
        <div id="news-popup1" className="news-overlay">
          <div className="news-popup">
            <img src={article.img} className="news-img-fluid" alt='zz' />
            <h3>{article.name}</h3>
            <a className="news-close" href="#">&times;</a>
            <div className="news-content">{article.info}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
