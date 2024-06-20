import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://jian-nc-news.onrender.com/api",
});

export function getArticles() {
  return baseApi.get("/articles");
}

export function getArticlesById(id) {
  return baseApi.get(`/articles/${id}`);
}

export function getCommentsByArticleId(id) {
  return baseApi.get(`/articles/${id}/comments`);
}

export function getTopics() {
  return baseApi.get("/topics");
}

export function getUsers() {
  return baseApi.get("/users");
}

export function patchArticleVotes(articleId, voteChange) {
  return baseApi.patch(`/articles/${articleId}`, { inc_votes: voteChange });
}

export function postCommentToArticle(articleId, comment) {
  const username = "tickle122";
  return baseApi.post(`/articles/${articleId}/comments`, {
    body: comment,
    username,
  });
}
