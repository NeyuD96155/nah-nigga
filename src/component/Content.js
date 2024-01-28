import React from "react";
import { Films } from "../Share/Films";

export default function Content() {
  return (
    <div className="container">
      <div className="row">
        {Films.map((film, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <img src={film.img} alt={film.name} />
              <h3>{film.name}</h3>
              <p className="title">{film.club}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
