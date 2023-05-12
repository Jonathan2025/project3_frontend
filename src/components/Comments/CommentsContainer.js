import React, { useEffect, useState } from "react"
import CommentForm from "./CommentForm"
import Comment from "./Comment"


const CommentsContainer = ({loginUserId, comments, fundId}) => {

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
    const deleteCommentHandler = async(commentId) => {
        try{
            const URL = process.env.REACT_APP_BACKEND_URL + `/${fundId}/deleteComment`
            const deleteComment = {
                id: commentId
            }

            const response = await fetch(URL, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(deleteComment)
            })
            const deletedComment = await response.json()

            // Reload the window after the comment is deleted
            window.location.reload()

        } catch (error) {
            console.error(error);
        } 
        
    }

    return (
        <div className="commentsContainer">
            <h1 class="text-center fundTitle"> Comment section</h1>
            {/* the formSubmitHandler points to a function addCommentHandler */}
            <CommentForm btnLabel="Submit" formSubmitHandler={(value) => addCommentHandler(value)}/>
        
        {/* we want to pass in the comments that we get from props and then map them */}
        {/* the my-4 in boostrap sets the vertical margin of about 16px for an element */}
        <div className="my-4" style={{ maxHeight: "350px", overflow: "auto" }}>
            {/* lets reverse the order of the comments so that the most recent will be on top */}
            {comments.slice(0).reverse().map((comment) => (
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