import React from "react"
import CommentForm from "./CommentForm"

const CommentsContainer = () => {
    // Essentially we need to match the comment with the parent ID (whether the comment is a comment or a reply)
    // and the user that it was replied to
    // Eventually we will be getting this information from the backend
    // These properties are based on the comment schema
    const addCommentHandler = (value, parent= null, replyOnUser = null)=>{

    }


    return (
        <div className="commentsContainer">
            <h1> This will be the comment section</h1>
            <CommentForm btnLabel="Submit"/>
        </div>
    )
}


export default CommentsContainer