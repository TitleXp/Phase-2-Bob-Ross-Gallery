import React from "react";
import Comment from "./Comment";

function CommentsContainer({ comments }) {

    const commentComponents = comments.map(comment => <Comment {...comment} key={comment.id}/>)
    return(
        <div>
            {commentComponents}
        </div>
    )
};

export default CommentsContainer;