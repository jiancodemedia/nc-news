import axios from "axios"

function postCommentToArticle(articleId, comment) {
    const URL = `https://jian-nc-news.onrender.com/api/articles/${articleId}comments`
    const username = 'testUser'
    return axios.post(URL, {body: comment, username})
}

export default postCommentToArticle