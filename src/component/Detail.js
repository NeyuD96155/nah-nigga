import { useParams } from 'react-router-dom';
import { data } from '../shared/ListOfFilm';

function Detail() {
  const userName = useParams();
  // eslint-disable-next-line eqeqeq
  const film = data.find(obj => obj.id == userName.id);

  // Handling the case where the film is not found
  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <div className='container'>
      <div className='product-card'>
        <div className='badge'>{film.name}</div>
        <div className='product-tumb'>
          <img src={`../${film.img}`} alt=''/>
        </div>
        <div className='product-details'>
          <h4>{film.Director}</h4>
          <div className='product-price'>Công chiếu: {film.year}</div>
          <p><b>Sơ lược</b>: {film.info}</p>
          <p><b>Cốt truyện</b>: {film.lore}</p>
          <div className='product-bottom-details'></div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
