import React from "react"
import { useState } from "react"
const CommentForm = ({btnLabel, 
    formSubmitHandler, 
    formCancelHandler = null, 
    initialText ="",
}) => {

    const [value, setValue] = useState(initialText)

    const submitHandler = (e) => {
        e.preventDefault()
        formSubmitHandler(value)
        setValue("")
    }


    return(
    <form onSubmit={submitHandler}>
        <div className="commentFormContainer"> 
            <textarea 
                className="commentTextArea" 
                rows="5" 
                placeholder="Leave Your Comments here..." 
                value = {value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className="commentSubmitBtnDiv">
                {formCancelHandler && (
                    <button onClick={formCancelHandler} className="cancelCommentBtn"> 
                        Cancel
                    </button>
                )}
                <button type="submit" className="commentSubmitBtn">
                    {btnLabel}
                </button>
            </div>
        </div>
    </form>
    )
}



export default CommentForm