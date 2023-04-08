// import the necessary useParams, usestate etc
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"


// First step is just to create a basic boilerplate and access it 

const Edit = (props) => {

    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    console.log("this is showing the params.id", id) 
    const funds = props.funds.data 
    console.log("This is going to show the funds", funds) // when we console log funds we get the data array with the funds and their respective information
    
    // f stands for fund, this arrow function checks if the "_id" property of that fund is equal to the id in the url 
    const fund = funds.find((f) => f._id === id )
    console.log(fund) // we get the first fund information that MATCHES the id in the url

    
    // state for the form 
    const [editForm, setEditForm] = useState(fund);

    return (
        <div className = "editPerson">
            <p>You reached the edit page</p>
        </div>
    )
        

}


export default Edit