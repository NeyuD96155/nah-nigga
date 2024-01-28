/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Films } from "../Share/Films";
import { Ripple, initMDB } from "mdb-ui-kit";
import "../style/FilmPresentation.css";
initMDB({ Ripple });
export default function Content() {
  const [film, setFilm] = useState([]);
  return (
    <div className="container">
      <div className="row">
        {Films.map((film, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
            <div className="card text-center">
              <img src={film.img} alt={film.name} className="img-fluid" />
              <h3>{film.name}</h3>
              <p className="title">{film.year}</p>
              <p className="title">{film.director}</p>
              <Link
                to={`detail/${film.id}`}
                className="btn btn-outline-success btn-rounded"
                data-mdb-ripple-color="dark"
                onClick={() => setFilm(film)}
                style={{ textDecoration: "none" }}
              >
                Detail
              </Link>
            </div>
          </div>
        ))}

        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={film.img} className="img-fluid" />
            <h3>{film.name}</h3>
            <a className="close" href="#">
              &times;
            </a>
            <div className="content">{film.info}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
