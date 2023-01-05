import React from "react";

function Comment({ comment }) {
    return(
        <div>
            <div className="CommentContainer">
                <h3>{comment.name}: </h3>
                <p>{comment.message}</p>
            </div>
        </div>
    )
};
export default Comment;