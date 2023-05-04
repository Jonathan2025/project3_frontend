import React from "react"
import { useState } from "react"
const CommentForm = ({btnLabel}) => {

    const [value, setValue] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
    }


    return(
    <form onSubmit={submitHandler}>
        <div> 
            <textarea 
                clasName="commentTextArea" 
                rows="5" 
                placeholder="Leave Your Comments here..." 
                value = {value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="commentSubmitBtn">
                {btnLabel}
            </button>

        </div>
    </form>
    )
}



export default CommentForm