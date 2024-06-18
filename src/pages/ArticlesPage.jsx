import React, { useCallback, useEffect, useState } from "react";
import getArticles from "../services/getArticles";
import "./ArticlesPage.css";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");

  const onClick = (event) => {
    setFilter(search);
    event.preventDefault();
  };

  const onChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  useEffect(() => {
    setLoading(true);
    getArticles().then((response) => {
      setArticles(response.data.articles);
      setLoading(false);
    });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="articles">
      <div className="search">
        <form onSubmit={onClick}>
          <input type="text" id="search" value={search} onChange={onChange} />
          <input type="button" value="Submit" />
        </form>
      </div>
      <div className="list">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
            </tr>
          </thead>
          <Articles
            articles={articles.filter((article) =>
              article.author.includes(filter)
            )}
          />
        </table>
      </div>
    </div>
  );
}

function Articles({ articles }) {
  return (
    <tbody>
      {articles.map((article) => (
        <tr key={article.article_id}>
          <td>{article.title}</td>
          <td>
            <img src={article.article_img_url} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default ArticlesPage;
