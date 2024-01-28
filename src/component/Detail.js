import { useParams } from "react-router-dom";
import { data } from "../shared/ListOfFilm";
import "../style/Detail.css";
function Detail() {
  const { id } = useParams();
  const film = data.find((obj) => obj.id === Number(id));

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <div className="container">
      <section className="film-card">
        <header className="badge">{film.name}</header>
        <div className="film-thumbnail">
          <img src={`../${film.img}`} alt={`${film.name} Poster`} />
        </div>
        <div className="film-details">
          <h4>{film.Director}</h4>
          <div className="film-release-date">Công chiếu: {film.year}</div>
          <p>
            <b>Sơ lược</b>: {film.info}
          </p>
          <p>
            <b>Cốt truyện</b>: {film.lore}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Detail;
