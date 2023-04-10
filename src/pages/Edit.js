// import the necessary useParams, usestate etc
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"


// First step is just to create a basic boilerplate and access it 

const Edit = (props) => {

    const params = useParams()
    const navigate = useNavigate()
    const id = params.id

    const funds = props.funds
    console.log(funds) // when we console log funds we get the data array with the funds and their respective information
    
    // f stands for fund, this arrow function checks if the "_id" property of that fund is equal to the id in the url 
    const fund = funds.find((f) => f._id === id);
    
    console.log(id) //642f7bbe5f10b18d9fcffaba
    console.log(fund) // we get the first fund information that MATCHES the id in the url

    // state for the form 
    const [editForm, setEditForm] = useState(fund)
    console.log("this is the editform", editForm)
    

    // HandleChange and HandleSubmit functions for the edit form 
    const handleChange = (event) => {
        event.preventDefault()
        // whatever gets changed, we change it to event.target.value
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }


    // 28 handlesubmit function which is called when use submits the form by clicking a button
    const handleSubmit = (event) => {
        event.preventDefault() // prevent the default form submission behavior that would cause the page to reload
        // updateFunds takes 2 arguments: an object representing the edited form data and the id of the fund being edited
        props.updateFund(editForm, fund._id)
        // redirect people back to index page AFTER the user edits the information
        navigate(`/jxfunds/${fund._id}`);
    }


    return (
        <div className = "editFund">
          <h1>Jx-Funds Edit Form</h1>
        <hr/>
            <form onSubmit={handleSubmit}>
                <label>Description: </label><br/>
                <input
                   label='Description: '
                    type="text"
                    value={editForm.description}
                    name="description"
                    placeholder="Description about the fund"
                    onChange={handleChange}
                /><br/>
                <label> Recommendation: </label><br/>
                <input
                    type="text"
                    value={editForm.recommendation}
                    name="recommendation"
                    placeholder="Recommendation for the Fund"
                    onChange={handleChange}
                /><br/>
                <br/>
            
                <input type="submit" value="Update Fund" />
                </form>

        </div>
    )

}


export default Edit