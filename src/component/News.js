import React, { useState, useEffect } from 'react';
import '../style/News.css'; // Assuming you have a CSS file for styling

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simulate fetching news articles from an API or load from local data
    const fetchNews = async () => {
      // Example: const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      // setArticles(data);

      // For demonstration, using static data
      setArticles([
        { id: 1, title: 'Leonardo DiCaprio dẫn dụ đạo diễn Martin Scorsese vào con đường "ghiền" phim Ghibli', summary: 'HHT - Không chỉ có niềm đam mê mãnh liệt với anime, nam tài tử Leonardo DiCaprio còn "dẫn dụ" vị đạo diễn lão làng của Hollywood - Martin Scorsese trở thành fan cứng nhà Ghibli bằng hai bộ phim "Công Chúa Mononoke" và "Vùng Đất Linh Hồn".Là “cặp bài trùng” trong hơn hai thập kỷ của Hollywood, nam diễn viên Leonardo DiCaprio và đạo diễn Martin Scorsese từng cùng nhau tạo nên loạt tuyệt phẩm điện ảnh như: Gangs of New York (2002), The Aviator (2004), The Departed (2006), Shutter Island (2010) và The Wolf of Wall Street (2013).Gần đây, bộ đôi diễn viên - đạo diễn trên đã có một buổi phỏng vấn với Letterboxd để quảng bá phim Killers of the Flower Moon (Vầng Trăng Máu) - bộ phim điện ảnh đánh dấu lần hợp tác thứ 6 của cả hai.', image: "https://image.tienphong.vn/w645/Uploaded/2024/qqc-lce23/2024_01_21/dicaprioinitiationscorsesestudioghibli-14.jpg" },
        { id: 2, title: "Fan Studio Ghibli chỉ trích gay gắt việc AI tái hiện lại Spirited Away", summary: "Mọi người hâm mộ anime hầu như đều biết đến Spirited Away và thư viện phim hoạt hình của Studio Ghibli. Các anime này đều là những bộ phim thú vị, giàu cảm xúc và quan trọng nhất mãn nhãn về phần nhìn.Người đứng đằng sau rất nhiều bộ phim của Studio Ghibli là Miyazaki Hayao, một nhà làm phim không chỉ có tầm ảnh hưởng trong nước mà còn vươn ra thế giới. Studio Ghibli do ông đồng sáng lập năm 1985, đã sản xuất hơn hai mươi bộ phim, trong đó có 5 phim là Spirited Away, Princess Mononoke, Howl's Moving Castle, Ponyo, và The Wind Rises đều lọt top 15 phim có doanh thu cao nhất tại Nhật Bản từ trước đến nay.Bộ phim mới nhất của Miyazaki Hayao là The Boy and the Heron ra mắt năm 2023, hiện đứng thứ 7 trong danh sách phim hoạt hình anime có doanh thu cao nhất mọi thời đại và là bộ phim do Ghibli phát hành có doanh thu cao nhất tại Mỹ.Các bộ phim của Studio Ghibli đã trở thành những tác phẩm nghệ thuật nổi bật đầy tính biểu tượng. Vì vậy, việc sử dụng AI để cố gắng tái tạo các nhân vật Studio Ghibli theo phong cách thực tế sẽ gặp phải nhiều chỉ trích của người hâm mộ. Thậm chí, việc cố gắng sử dụng AI để tạo ra một phiên bản mới của một bộ phim hoạt hình Studio Ghibli bị coi là thực sự là xúc phạm đến hoạt hình.", image: "https://gamek.mediacdn.vn/133514250583805952/2024/1/18/photo-1705573859258-1705573859791500971882.png" },
        // Add more articles as needed
      ]);
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h1>News Page</h1>
      {articles.map(article => (
        <div key={article.id} className="news-article">
          <img src={article.image} alt={article.title} className="news-image" />
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
        </div>
      ))}
      {/* Add more content or components related to News here */}
    </div>
  );
};

export default News;
