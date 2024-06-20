import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../components/Comments";
import "./ArticleDetailPage.css";
import {
  getArticlesById,
  getCommentsByArticleId,
  postCommentToArticle,
  patchArticleVotes
} from "../services/articlesApi";

function ArticleDetailPage() {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [articleLoading, setArticleLoading] = useState(false);
  const [votes, setVotes] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [postingComment, setPostingComment] = useState(false);
  const [commentsLoading, setCommentsLoading] = useState(false);

  useEffect(() => {
    setArticleLoading(true);
    setCommentsLoading(true);

    getArticlesById(articleId)
      .then((response) => {
        setArticle(response.data.article);
        setVotes(response.data.article.votes);
      })
      .finally(() => {
        setArticleLoading(false);
      });

    getCommentsByArticleId(articleId)
      .then((response) => {
        setComments(response.data.comments);
      })
      .finally(() => {
        setCommentsLoading(false);
      });
  }, [articleId]);

  function handleVote(change) {
    const updatedVotes = votes + change;
    setVotes(updatedVotes);
    patchArticleVotes(articleId, change);
  }

  function handleCommentChange(event) {
    setNewComment(event.target.value);
  }

  function handleSubmitComment(event) {
    event.preventDefault();

    const comment = newComment.trim();

    if (!comment) {
      return;
    }

    setPostingComment(true);

    postCommentToArticle(articleId, comment)
      .then((response) => {
        setComments((prevComments) => [response.data.comment, ...prevComments]);

        setNewComment("");
      })
      .finally(() => {
        setPostingComment(false);
      });
  }

  if (articleLoading) return <h1>Loading...</h1>;
  if (!article) return <h1>Article not found</h1>;

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
        <b>Created at:</b> {new Date(article.created_at).toLocaleString()}
      </p>
      <div>
        <p>
          <b>Votes:</b> {votes}
        </p>
        <button onClick={() => handleVote(+1)}>UpVote</button>
        <button onClick={() => handleVote(-1)}>DownVote</button>
      </div>
      <p>{article.body}</p>
      <img src={article.article_img_url} alt={article.title} />

      <form onSubmit={handleSubmitComment}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write your comment here"
          rows="4"
          cols="50"
          disabled={postingComment}
        />
        <br />
        <button type="submit" disabled={postingComment}>
          {postingComment ? "Posting..." : "Post Comment"}
        </button>
      </form>

      <div className="comment-box">
        <h3>Comments</h3>
        {commentsLoading ? (
          <p>Loading comments...</p>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <CommentBox key={comment.comment_id} comment={comment} />
          ))
        ) : (
          <p>No comments</p>
        )}
      </div>
    </div>
  );
}

export default ArticleDetailPage;
