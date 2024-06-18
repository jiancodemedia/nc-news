import axios from "axios";

function getArticlesById() {
  const URL = `https://jian-nc-news.onrender.com/api/articles/${id}`;
  const ArticlesId = axios.get(URL);
  return ArticlesId;
}

export default getArticlesById;