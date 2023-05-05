import React from "react"
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";



// pass in the comment props
const Comment = ({comment, loginUserId}) => {
    // we want to check if the user is logged in
    const isUserLoggedIn = Boolean(loginUserId)
    // logged in user has to have the same user id as the user who made the comment in order to edit and delete
    const commentBelongsToUser = loginUserId === comment.user._id




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
                <p className="commentDescription">{comment.desc}</p>
                
                {/* seeing if user is logged in before we allow them to reply to a comment */}
                <div className="commentActions">
                    {isUserLoggedIn && (
                        <button className="commentReply">
                            <FiMessageSquare />
                            <span>Reply</span>
                        </button>
                    )}
                    {/* user must be the same user as the one who made the comment to be able to edit and delete it */}
                    {commentBelongsToUser && (
                    <>
                        <button className="commentEdit">
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
            </div>
        </div>
    )
}

export default Comment