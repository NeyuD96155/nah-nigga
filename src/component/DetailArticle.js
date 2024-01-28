import { useParams } from "react-router-dom";
import { dataArticles } from "../shared/ListOfArticle";
import "../style/Detail.css";

function Detail() {
  const { id } = useParams();
  const article = dataArticles.find((obj) => obj.id === Number(id));

  if (!article) {
    return <div className="detail-not-found">Article not found</div>;
  }

  return (
    <div className="detail-container">
      <section className="detail-article-card">
        <header className="detail-badge">{article.title}</header>
        <div className="detail-article-thumbnail">
          <img src={`../${article.image}`} alt={`${article.title} Poster`} />
        </div>
        <div className="detail-article-details">
          <h4 className="detail-summary">{article.summary}</h4>
          <p className="detail-content">
            <b>Nội dung</b>: {article.content}
          </p>
        </div>
      </section>
    </div>
  );
}

export default Detail;
