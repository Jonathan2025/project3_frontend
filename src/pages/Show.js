import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  
  //handling for delete
  const removeFund = (e) => {
    e.preventDefault()
    props.deleteFund(fund._id);
    navigate("/jxfunds");
  }

  return (
    <>
      <div className="fundInfo">
        <h1> Fund Show Page </h1>
        <p>{fund.name}</p>
        <p>{fund.company}</p>
        <p>{fund.symbol}</p>
        <p>{fund.description}</p>
        <p>{fund.recommendation}</p>
        <p>{fund.date}</p>
        <p>{fund.timezone}</p>
        <p>{fund.price}</p>
        <p>{fund.dividends}</p>

      
      </div>
      <button onClick={editForm}>Edit</button>
      <button onClick = {removeFund}>Delete</button>
      <div className="comments">
        <h1>comments will go here</h1>
      </div>
    </>
  );
};

export default Show;
