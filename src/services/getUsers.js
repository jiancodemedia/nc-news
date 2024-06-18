import axios from "axios";

function getUsers () {
    const URL = 'https://jian-nc-news.onrender.com/api/users'
    const allUsers = axios.get(URL)
    return allUsers
}

export default getUsers