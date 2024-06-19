import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getArticlesById from "../services/getArticlesById";
import CommentBox from "../components/Comments";
import getCommentsByArticlesId from "../services/getCommentsByArticleId";
import "./ArticleDetailPage.css";

function ArticleDetailPage() {
  const { articleId } = useParams();
  const [article, setArticles] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getArticlesById(articleId).then((response) => {
      setArticles(response.data.article);
      
    });
    getCommentsByArticlesId(articleId).then((response) => {
      setComments(response.data.comments);
      setLoading(false)
    });
  }, [articleId]);

  if (loading) return <h1>Loading...</h1>;
  if (!article) return <h1>Article no found</h1>;

  return (
    <div className="article-detail">
      <h2>{article.title}</h2>
      <p>
        <b>Author:</b> {article.author}
      </p>
      <p>
        <b>Topic:</b> {article.topic}
      </p>
      <p>
        <b>Created at:</b> {article.created_at}
      </p>
      <p>
        <b>Votes:</b> {article.votes}
      </p>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt={article.title} />

      <div className="comment-box">
        <h3>Comments</h3>
        {comments ? (comments.map((comment) => (<CommentBox key={comment.comment_id} comment={comment} />))) : (<p>No comments</p>)}
      </div>
    </div>
  );
}

export default ArticleDetailPage;
