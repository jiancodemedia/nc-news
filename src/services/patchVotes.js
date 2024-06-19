import axios from 'axios'

function updateArticleVotes (articleId, voteChange) {
    const URL = `https://jian-nc-news.onrender.com/api/articles/${articleId}`;
    return axios.patch(URL, {inc_votes: voteChange})
}

export default updateArticleVotes