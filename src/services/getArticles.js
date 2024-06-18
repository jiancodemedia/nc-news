import axios from "axios";

function getArticles() {
  const URL = "https://jian-nc-news.onrender.com/api/articles";
  const allArticles = axios.get(URL);
  return allArticles;
}

export default getArticles;
