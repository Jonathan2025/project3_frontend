import React from "react"
import CommentForm from "./CommentForm"

const CommentsContainer = () => {
    return (
        <div className="commentsContainer">
            <h1> This will be the comment section</h1>
            <CommentForm btnLabel="Submit"/>
        </div>
    )
}


export default CommentsContainer