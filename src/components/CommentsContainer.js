import React from "react";
import Comment from "./Comment";

function CommentsContainer({ comments }) {

    const commentComponents = comments.map(comment => <Comment comment={comment} key={comment.id}/>)
    return(
        <div className="Container">
            {commentComponents}
        </div>
    )
};
export default CommentsContainer;