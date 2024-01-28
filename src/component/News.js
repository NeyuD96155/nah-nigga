/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Ripple, initMDB } from "mdb-ui-kit";
import '../style/News.css'; // Make sure to create and link a CSS file for styling
import { Articles } from "../Share/Articles";
initMDB({ Ripple });

export default function News() {
  const [article, setArticle] = useState([]);

  return (
    <div className="container">
      <div className="row">
        {Articles.map((article, index) => (
          <div className="col-12" key={index}> {/* Adjusted to col-12 for full width */}
            <div className="card text-center">
              <img src={article.image} alt={article.title} className="img-fluid" />
              <h3>{article.title}</h3>
              <p className="content-summary">{article.summary}</p>
              <Link
                to={`detail_article/${article.id}`}
                className="btn btn-outline-success btn-rounded"
                data-mdb-ripple-color="dark"
                onClick={() => setArticle(article)}
              >
                More Detail
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
