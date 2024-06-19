import axios from "axios";

function getCommentsByArticleId (id) {
  const URL = `https://jian-nc-news.onrender.com/api/articles/${id}/comments`;
  
  return axios.get(URL);
  
}

export default getCommentsByArticleId 