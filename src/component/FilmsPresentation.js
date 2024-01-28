import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Films } from "../Share/Films";
import { Ripple, initMDB } from "mdb-ui-kit";
import "../style/FilmPresentation.css";

initMDB({ Ripple });

export default function Content() {
  const [film, setFilm] = useState([]);

  return (
    <div className="film-container">
      <div className="film-row">
        {Films.map((film, index) => (
          <div className="film-col-lg-3 film-col-md-4 film-col-sm-6 film-col-12" key={index}>
            <div className="film-card text-center">
              <img src={film.img} alt={film.name} className="film-img-fluid" />
              <h3>{film.name}</h3>
              <p className="film-title">{film.year}</p>
              <p className="film-title">{film.director}</p>
              <Link
                to={`detail/${film.id}`}
                className="film-btn btn-rounded"
                data-mdb-ripple-color="dark"
                onClick={() => setFilm(film)}
                style={{ textDecoration: "none" ,color:'#fff'}}
              >
                Detail
              </Link>
            </div>
          </div>
        ))}

        <div id="film-popup1" className="film-overlay">
          <div className="film-popup">
            <img src={film.img} className="film-img-fluid" alt='zz' />
            <h3>{film.name}</h3>
            <a className="film-close" href="#">&times;</a>
            <div className="film-content">{film.info}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
