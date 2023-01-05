//copy this whole page to the main

import React from "react";
import Comment from "./Comment";

function CommentsContainer({ comments }) {

    const commentComponents = comments.map(comment => <Comment comment={comment} key={comment.id}/>)
    return(
        <div>
            {commentComponents}
        </div>
    )
};

export default CommentsContainer;