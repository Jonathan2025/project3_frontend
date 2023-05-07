import React from "react"
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";
import CommentForm from "./CommentForm";


// pass in the comment props
const Comment = ({comment, loginUserId, affectedComment, setAffectedComment, addComment, parentId = null, updateComment }) => {
    // we want to check if the user is logged in
    const isUserLoggedIn = Boolean(loginUserId)
    // logged in user has to have the same user id as the user who made the comment in order to edit and delete
    const commentBelongsToUser = loginUserId === comment.user._id
    // in order to reply, the comment must be affected and it must be a reply type
    const isReplying = 
        affectedComment && 
        affectedComment.type === 'replying' && 
        affectedComment._id === comment._id 
    

    // create an isEditing 
    const isEditing = 
        affectedComment && 
        affectedComment.type === 'editing' && 
        affectedComment._id === comment._id 


    
    // create a replied comment ID which is equal to parentID. If the parentID is not null, then set the replied comment ID to parentID else set to comment._id
    const repliedCommentID = parentId ?  parentId :comment._id
    
    // create a replyOnUserID
    const replyOnUserID = comment.user._id


    return(
        <div className="comment"> 
            {/* we can add a left side div here such as a user image but we dont need to do that  */}
        
            {/* now we will add the right side  which will have the username*/}
            <div className="">
                <h5 className="commentUserName">{comment.user.name}</h5>
                <span className="commentDate">
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        day:"numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit"
                    })}
                </span>
                
                {/* If not editing then can render the comment description */}
                {!isEditing && (
                    <p className="commentDescription">{comment.desc}</p>
                )}



                
                
                {/* If we are editing the comment, then render the comment form and we want to show the initial text  */}
                {isEditing && (
                    <CommentForm btnLabel="Update" formSubmitHandler={(value) => updateComment(value, comment._id)}
                    formCancelHandler={() => setAffectedComment(null)}
                    initialText ={comment.desc}
                    />
                )}


                {/* seeing if user is logged in before we allow them to reply to a comment */}
                <div className="commentActions">
                    {isUserLoggedIn && (
                        <button className="commentReply" onClick={() => setAffectedComment({type: 'replying', _id:comment._id})}>
                            <FiMessageSquare />
                            <span>Reply</span>
                        </button>
                    )}
                    {/* user must be the same user as the one who made the comment to be able to edit and delete it */}
                    {commentBelongsToUser && (
                    <>
                        <button className="commentEdit"
                            onClick={() => setAffectedComment({type: 'editing', _id:comment._id})}
                        >
                            <FiEdit2 />
                            <span>Edit</span>
                        </button>
                        <button className="commentDelete">
                            <FiTrash />
                            <span>Delete</span>
                        </button>
                    </>
                    )}
                </div>
                {/* If the user is replying then render the comment form and then pass in the addComment function*/}
                {isReplying && <CommentForm btnLabel="Reply" formSubmitHandler={(value) => addComment(value, repliedCommentID, replyOnUserID)}
                
                //add in the formCancelHandler 
                formCancelHandler={() => setAffectedComment(null)}
                />}
            </div>
        </div>
    )
}

export default Comment