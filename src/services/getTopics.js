import axios from "axios";

function getTopics () {
    const URL = 'https://jian-nc-news.onrender.com/api/topics'
    const allTopics = axios.get(URL)
    return allTopics
}

export default getTopics