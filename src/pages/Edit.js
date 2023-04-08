// import the necessary useParams, usestate etc
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"


// First step is just to create a basic boilerplate and access it 

const Edit = (props) => {

    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    console.log("this is showing the params.id", id) 
    const funds = props.funds
    console.log("This is going to show the funds", funds) // data: Array(20) 0 : {_id: '642f7bbe5f10b18d9fcffaba', name: 'Fund1', company: 'FricksFunds', sym
    



    return (
        <div className = "editPerson">
            <h1>You have reached the edit page where the edit page will be shown</h1>
        </div>
    )


}


export default Edit