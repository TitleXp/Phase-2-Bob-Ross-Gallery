import React from "react";
import { useState } from "react";

function CommentForm({ setComments }){

    const [newComment, setNewComment] = useState({
        name: "",
        message: ""
    })

    const handleChange = (e) => {
        setNewComment({...newComment, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            fetch("http://localhost:3000/comments", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newComment)
            })
            .then(response => response.json())
            .then(newComment => setComments(currentVal => [newComment, ...currentVal]))
            .catch(error => alert(error))
            setNewComment({
                name: "",
                message: ""
            })
    }

    return(
        <div className="commentForm">
            <form  onSubmit={handleSubmit}>

                <div>
                    <input className="commentName" type="text" name="name" placeholder="Name" onChange={handleChange} value={newComment.name} required/>
                </div>
                
                <div>
                    <textarea className="commentBox" type="text" name="message" placeholder="Comment here" rows={5} onChange={handleChange} value={newComment.message} required/>
                </div>

                <input type="submit" value="Response" />

            </form>
        </div>
    )
};
export default CommentForm;
