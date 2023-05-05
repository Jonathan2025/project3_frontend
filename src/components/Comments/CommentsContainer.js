import React, { useEffect, useState } from "react"
import { getCommentsData } from "../Data/Data"
import CommentForm from "./CommentForm"
import Comment from "./Comment"

const CommentsContainer = ({loginUserId}) => {

    const [comments, setComments] = useState([]) // create a state for comments
    const mainComments = comments.filter((comment) => comment.parent == null) // filter for only the main comments 
    const [affectedComment, setAffectedComment] = useState(null) // want to select the affected comment


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
                desc: value,
                post: "1",
                parent: parent,
                replyOnUser: replyOnUser,
                createdAt: "2022-12-31T17:22:05.092+0000",
        }


        setComments((curState) => {
            return [newComment, ...curState]
        })


    }


    return (
        <div className="commentsContainer">
            <h1> This will be the comment section</h1>
            <CommentForm btnLabel="Submit" formSubmitHandler={(value) => addCommentHandler(value)}/>
        
        <div className="mainComment">
            {mainComments.map((comment) => (
                <Comment comment={comment} loginUserId={loginUserId} affectedComment={affectedComment} setAffectedComment={setAffectedComment}/>
            ))}
        </div>
        
        
        </div>
    )
}


export default CommentsContainer