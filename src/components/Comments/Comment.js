import React from "react"

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
            </div>
        
        </div>
    )
}

export default Comment