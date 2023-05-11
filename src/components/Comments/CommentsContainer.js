import React, { useEffect, useState } from "react"
import { getCommentsData } from "../Data/Data"
import CommentForm from "./CommentForm"
import Comment from "./Comment"

const CommentsContainer = ({loginUserId, comments, fundId}) => {

    //const [comments, setComments] = useState([]) // create a state for comments
    // const mainComments = comments.filter((comment) => comment.parent == null) // filter for only the main comments 
    const [affectedComment, setAffectedComment] = useState(null) // want to select the affected comment



    // Essentially we need to match the comment with the parent ID (whether the comment is a comment or a reply)
    // and the user that it was replied to
    // Eventually we will be getting this information from the backend
    // These properties are based on the comment schema
    const addCommentHandler = async(value, parent= null, replyOnUser = null)=>{
        try { 
            const commentData = {
                user: loginUserId,
                desc: value,
                parent: parent,
                replyOnUser: replyOnUser,
                fundId: fundId // we want to set the fundId to be what we get from the props fund Id
            }

            // Here we make a post request to the backend route 
            const URL = process.env.REACT_APP_BACKEND_URL + `/${commentData.fundId}`

            const response = await fetch(URL,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(commentData)
            })

            const newComment = await response.json()

        } catch (error) {
            console.error(error)
        }
    }
       
    // create a handler for updating comments 
    const updateCommentHandler = async(value, commentId) => {
        try{
            // we are going to pass in the fundId that we get from the props
            const URL = process.env.REACT_APP_BACKEND_URL + `/${fundId}/updateComment`

            // In order for the comment to update, we need to have the commentId that is passed else, the handler wont know which comment to update
            const updatedComment ={
                id: commentId,
                desc: value,
            }

            const response = await fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedComment)
            })
            const newUpdatedComment = await response.json()

        } catch (error) {
            console.error(error);
        }
    }

    // create handler for delete comment, only allow the 
    const deleteCommentHandler = (commentId) => {
        // const updatedComments = comments.filter((comment) => {
        //     return comment._id !== commentId
        // })
        // setComments(updatedComments)
    }




    
    // create a get replies handler 
    // we use a filter to get the children of the main comment
    // const getRepliesHandler = (commentId) => {
    //     return comments
    //     .filter((comment) => comment.parent === commentId)
    //     // then we need to sort the replies in ascending order
    //     .sort((a,b)=> {
    //         return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    //     })
    // }




    return (
        <div className="commentsContainer">
            <h1> This will be the comment section</h1>
            {/* the formSubmitHandler points to a function addCommentHandler */}
            <CommentForm btnLabel="Submit" formSubmitHandler={(value) => addCommentHandler(value)}/>
        
        {/* we want to pass in the comments that we get from props and then map them */}
        <div className="mainComment">
            {comments.map((comment) => (
                <Comment
                //need to also pass in a key prop
                key = {comment._id}
                comment={comment} 
                loginUserId={loginUserId} 
                affectedComment={affectedComment} 
                setAffectedComment={setAffectedComment}
                addComment= {addCommentHandler}
                updateComment = {updateCommentHandler}
                deleteComment={deleteCommentHandler}
                replies={comment.replies}
                />
            ))}
        </div>
        
        
        </div>
    )
}


export default CommentsContainer