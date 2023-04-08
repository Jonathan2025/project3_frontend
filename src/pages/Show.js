import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate()
  const id = params.id;
  const funds = props.funds;
  console.log(funds);
  // const fund = funds.find((f) => f._id === id);

  //handling for delete
//   const removeFund = (e) => {
//     e.preventDefault()
//     props.deleteFund(fund._id);
//     navigate("/jxfunds");
//   };
  return (
    <>
      <div className="fundInfo">
        <h1> Fund Show Page </h1>
        {/* <h1>{fund.name} ({fund.symbol})</h1> */}
        {/* <h2>Exchange: {fund.exchange}</h2> */}

        {/*  what we'd want to display ... maybe
            Code/ Cusip of the fund: String,
            Name: String,
            Exchange: String,
            CurrencyCode: String,
            CurrencyName: String,
            CurrencySymbol: String,
            Sector: String,
            Industry: String,
            Description: String,
            Year-to-Date Yield: Percent 
        */}
      </div>
      <button>Edit</button>
      {/* <button onClick = {removeFund}>Delete</button> */}
      <div className="comments">
        <h1>comments will go here</h1>
      </div>
    </>
  );
};

export default Show;
