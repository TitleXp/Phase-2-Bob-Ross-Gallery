import React from "react";



function Comment({ comment }) {
    return(
        <div>
            <h3>{comment.name}: {comment.message}</h3>
            
        </div>
    )
};

export default Comment;