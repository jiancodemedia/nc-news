import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import getArticlesById from "../services/getArticlesById";
import "./ArticleDetailPage.css"

function ArticleDetailPage() {
    const {articleId} = useParams()
    const [article, setArticles] = useState(null)
    const [loading, setLoading] = useState(false)

useEffect(() => {
    setLoading(true);
    getArticlesById(articleId).then((response) => {
        setArticles(response.data.article);
        setLoading(false)
    })
}, [articleId])

if(loading) return <h1>Loading...</h1>
if(!article) return <h1>Article no found</h1>

return (
    <div className="article-detail" >
        <h2>{article.title}</h2>
        <p><b>Author:</b> {article.author}</p>
        <p><b>Topic:</b> {article.topic}</p>
        <p><b>Created at:</b> {article.created_at}</p>
        <p><b>Votes:</b> {article.votes}</p>
        <p>{article.body}</p>
        <img src={article.article_img_url} alt={article.title}/>
    </div>
)
}

export default ArticleDetailPage