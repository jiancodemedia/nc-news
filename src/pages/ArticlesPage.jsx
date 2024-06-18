import React, { useEffect, useState } from "react";
import getArticles from "../services/getArticles";
import "./ArticlesPage.css";
import { Link } from "react-router-dom";

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
          <button type="submit">Submit</button>
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
            articles={articles} filter={filter}
          />
        </table>
      </div>
    </div>
  );
}

function Articles({ articles, filter }) {
  const filteredArticles = articles.filter((article) =>
    article.title.includes(filter) )

  return (
    <tbody>
      {filteredArticles.map((article) => (
        <tr key={article.article_id}>
          <td><Link to={`/article/${article.article_id}`}>{article.title}</Link></td>
          <td>
            <img src={article.article_img_url} alt={article.title}/>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default ArticlesPage;
