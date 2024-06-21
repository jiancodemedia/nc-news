import React, { useEffect, useState } from "react";
import { getArticles } from "../services/articlesApi";
import "./ArticlesPage.css";
import { Link } from "react-router-dom";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSoftOrder] = useState("asc");

  const onClick = (event) => {
    setFilter(search);
    event.preventDefault();
  };

  const onChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value)
  }

const handleSortOrder = (event) => {
  setSoftOrder(event.target.value)
}

  useEffect(() => {
    setLoading(true);
    getArticles().then((response) => {
      setArticles(response.data.articles);
      setLoading(false);
    });
  }, []);

  function sortArticles(articles) {
    return [...articles].sort((a, b) => {
      console.log(a)
      if (sortBy === "date") {
        return sortOrder === "asc"
          ? new Date(a.created_at) - new Date(b.created_at)
          : new Date(b.created_at) - new Date(a.created_at);
      } else if (sortBy === "comments") {
        return sortOrder === "asc"
          ? a.comment_count - b.comment_count
          : b.comment_count - a.comment_count;
      } else if (sortBy === "votes") {
        return sortOrder === "asc" ? a.votes - b.votes : b.votes - a.votes;
      }
      return 0;
    });
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="articles">
      <div className="search">
        <form onSubmit={onClick}>
          <input type="text" id="search" value={search} onChange={onChange} />
          <button type="submit">Search</button>
        </form>
        <div className="sortControls">
          <select value={sortBy} onChange={handleSortBy}>
            <option value='date'>Date</option>
            <option value='comments'>Comment count</option>
            <option value='votes'>Votes</option>
          </select>
          <select value={sortOrder} onChange={handleSortOrder}>
          <option value='asc'>Ascending</option>
          <option value='desc'>Descending</option>
          </select>
      </div>
       </div>

       <div className="list">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
            </tr>
          </thead>
          <Articles articles={sortArticles(articles)} filter={filter} />
        </table>
       </div>
    </div>
  );
}

function Articles({ articles, filter }) {
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <tbody>
      {filteredArticles.map((article) => (
        <tr key={article.article_id}>
          <td>
            <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
          </td>
          <td>
            <img src={article.article_img_url} alt={article.title} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default ArticlesPage;
