// import the necessary useParams, usestate etc
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Authentication/Login";

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
    
    //see if the user is authenticated first
    const { isAuthenticated } = useAuth0();
        if (!isAuthenticated) {
          return (
            <section className='createForm'>
              <div>
                  <h1>Sign In to Access JXFunds!</h1>
                  <LoginButton className="loginButton"/>
              </div>
          </section>
          );
        }

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
            <img className="editImg" src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80" alt=""/>
            <div className="editForm">
                <h1 className="formT" >Edit {fund.name}?</h1>
            <form onSubmit={handleSubmit}>
                <label>Symbol: </label><br/>
                <input
                    type="text"
                    value={editForm.symbol}
                    name="symbol"
                    placeholder="Fund symbol"
                    onChange={handleChange}
                    required
                /><br/>

                <label>Company: </label><br/>
                <select value={editForm.company} name="company" onChange={handleChange} required>
                    <option value="">Select a company</option>
                    <option value="Fidelity">Fidelity</option>
                    <option value="Charles Schwab">Charles Schwab</option>
                    <option value="Vanguard">Vanguard</option>
                    <option value="BlackRock">BlackRock</option>
                    <option value="State Street">State Street</option>
                    <option value="Invesco">Invesco</option>
                    <option value="Amundi">Amundi</option>
                    <option value="Northern Trust">Northern Trust</option>
                    <option value="Legal & General">Legal & General</option>
                    <option value="DWS Group">DWS Group</option>
                    <option value="Other">Other</option>
                </select>
                <br></br>
                <br></br>

                 <label>Description: </label><br/>
                <input
                    type="text"
                    value={editForm.description}
                    name="description"
                    placeholder="Description about the fund"
                    onChange={handleChange}
                    required
                /><br/>
                <label> Recommendation: </label><br/>
                <input
                    type="text"
                    value={editForm.recommendation}
                    name="recommendation"
                    placeholder="Recommendation for the Fund"
                    onChange={handleChange}
                    required
                /><br/>
                <br/>
            
                <input type="submit" value="Update Fund" />
                </form>
                </div>
          
        </div>
    )

}


export default Edit