import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../services/articlesApi";
import "./ArticleDetailPage.css"

function TopicDetailPage() {
  const { topicSlug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles({ topic: topicSlug })
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error(`Error fetching ${topicSlug}`, error);
      });
  }, [topicSlug]);

  return (
    <div className="topics">
      <h1>Articles in {topicSlug}</h1>
      <table className="list">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {articles.map((article) => (
            <tr key={article.article_id}>
              <td>
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
              </td>
              <td>
                <img src={article.article_img_url} alt={article.title} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopicDetailPage;
