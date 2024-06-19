import axios from "axios"

function postCommentToArticle(articleId, comment) {
    const URL = `https://jian-nc-news.onrender.com/api/articles/${articleId}comments`
    return axios.post(URL, {body: comment})
}

export default postCommentToArticle