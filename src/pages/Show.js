import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Landing from "./Landing"

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const funds = props.funds;
  console.log(funds);
  const fund = funds.find((f) => f._id === id);

  //linking edit btn to edit route
  const editForm = (e) => {
    navigate(`/jxfunds/edit/${fund._id}`)
  }
  
  // console.log the api key to see that we can access it here 
  const API_KEY = process.env.REACT_APP_API_KEY
  console.log("THIS IS process env ", API_KEY)

  //handling for delete
  const removeFund = (e) => {
    e.preventDefault()
    props.deleteFund(fund._id);
    navigate("/jxfunds");
  }

  return (
    <>
      <div className="fundInfo">
        <h1> {fund.name} </h1>
        <p>{fund.company}</p>
        <p>{fund.symbol}</p>
        <p>{fund.description}</p>
        <p>{fund.recommendation}</p>
        <p>{fund.date}</p>
        <p>{fund.timezone}</p>
        <p>{fund.price}</p>
        <p>{fund.dividends}</p>
    
      </div>

      <button className='editBtn' onClick={editForm}>Edit</button>
      <button className='deleteBtn' onClick = {removeFund}>Delete</button>

      <div className="comments">
        <h1>comments will go here</h1>
      </div>
    </>
  );
};

export default Show;
