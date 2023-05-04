import React, { useEffect, useState } from "react"
import { getCommentsData } from "../Data/Data"
import CommentForm from "./CommentForm"

const CommentsContainer = () => {


    // create a state for comments
    const [comments, setComments] = useState([])
    console.log("Here are the comments", comments)

    // now we want to use useffect to fill the comments state with the comment data, it runs on itsself
    useEffect(() => {
        (async() => {
            const commentData = await getCommentsData()
            setComments(commentData)
        })()
    }, [])

    // Essentially we need to match the comment with the parent ID (whether the comment is a comment or a reply)
    // and the user that it was replied to
    // Eventually we will be getting this information from the backend
    // These properties are based on the comment schema
    const addCommentHandler = (value, parent= null, replyOnUser = null)=>{
        const newComment = {
                _id: "10",
                user: {
                  _id: "a",
                  name: "Mohammad Rezaii",
                },
                desc: "it was a nice post, Thank you!",
                post: "1",
                parent: null,
                replyOnUser: null,
                createdAt: "2022-12-31T17:22:05.092+0000",

        }
    }


    return (
        <div className="commentsContainer">
            <h1> This will be the comment section</h1>
            <CommentForm btnLabel="Submit" formSubmitHandler={(value) => addCommentHandler(value)}/>
        </div>
    )
}


export default CommentsContainer