import React from "react";

function Comment( name, comment) {
    return(
        <div>
            <h3>{name}</h3>
            <p>{comment}</p>
        </div>
    )
};

export default Comment;