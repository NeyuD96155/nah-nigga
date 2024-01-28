import { useParams } from 'react-router-dom';
import { dataArticles } from '../shared/ListOfArticle';
import '../style/Detail.css'
function Detail() {
  const { id } = useParams();
  const article = dataArticles.find(obj => obj.id === Number(id));

  if (!article) {
    return <div>Film not found</div>;
  }

  return (
    <div className='container'>
      <section className='article-card'>
        <header className='badge'>{article.title}</header>
        <div className='article-thumbnail'>
          <img src={`../${article.image}`} alt={`${article.title} Poster`} />
        </div>
        <div className='article-details'>
          <h4>{article.summary}</h4>
          <p><b>Cốt truyện</b>: {article.content}</p>
        </div>
      </section>
    </div>
  );
}

export default Detail;
