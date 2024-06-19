import React from "react";

function CommentBox ({comment}) {
    return (
        <div className="comment">
            <p><strong>{comment.author}</strong> - {comment.created_at}</p>
            <p>{comment.body}</p>

        </div>
    )
}

export default CommentBox