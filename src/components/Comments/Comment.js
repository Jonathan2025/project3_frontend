import React from "react"
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";



// pass in the comment props
const Comment = ({comment}) => {
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
                
                <div className="commentActions">
                    <button className="commentReply">
                        <FiMessageSquare />
                        <span>Reply</span>
                    </button>
                    <button className="commentEdit">
                        <FiEdit2 />
                        <span>Edit</span>
                    </button>
                    <button className="commentDelete">
                        <FiTrash />
                        <span>Delete</span>
                    </button>


                </div>

                
            </div>
        
        </div>
    )
}

export default Comment